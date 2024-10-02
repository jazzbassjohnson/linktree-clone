import { Profile } from "./types";
import { UserProfile } from "./UserProfile";
import { useParams } from "react-router-dom";
import '../EditView.css';
import { useEffect, useState } from "react";
import { useProfile } from "../utils/useProfile";
import { Theme } from "./types";
import { ThemeProvider } from "./ThemeProvider";

const EditView = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { profile, setProfile } = useProfile(id);

  // Initialize the themeForm with default values
  const [themeForm, setThemeForm] = useState<Theme>({
    primaryColor: "#000",
    secondaryColor: "#000",
    backgroundColor: "#fff",
    backgroundImage: "",
  });

  // Flag to indicate the initial theme setup is done
  const [isInitialThemeSet, setIsInitialThemeSet] = useState(false);

  // Update themeForm when the profile is loaded, but only once
  useEffect(() => {
    if (profile && profile.theme && !isInitialThemeSet) {
      setThemeForm(profile.theme);
      setIsInitialThemeSet(true); // Prevent further updates from profile.theme
    }
  }, [profile, isInitialThemeSet]);

  // Update the profile with new themeForm values when they change
  const handleThemeChange = (newTheme: Partial<Theme>) => {
    setThemeForm((prevTheme) => {
      const updatedTheme = { ...prevTheme, ...newTheme };
      setProfile({ ...profile!, theme: updatedTheme });
      return updatedTheme;
    });
  };

  if (!id || !profile) {
    return (
      <div className="ProfileView">
        <h1>Profile not found</h1>
      </div>
    );
  }

  return (
    <div className="edit-view-container">
      <div className="edit-tools">
        <h1>Editing Tools</h1>
        <div>
          <h2>Theme</h2>
          <div className="theme-input-container">
            <label>Primary Color</label>
            <input
              type="color"
              value={themeForm.primaryColor}
              onChange={(e) => {
                handleThemeChange({ primaryColor: e.target.value });
              }}
            />
          </div>
          <div className="theme-input-container">
            <label>Secondary Color</label>
            <input
              type="color"
              value={themeForm.secondaryColor}
              onChange={(e) => {
                handleThemeChange({ secondaryColor: e.target.value });
              }}
            />
          </div>
          <div className="theme-input-container">
            <label>Background Color</label>
            <input
              type="color"
              value={themeForm.backgroundColor}
              onChange={(e) => {
                handleThemeChange({ backgroundColor: e.target.value });
              }}
            />
          </div>
          <div className="theme-input-container">
            <label>Background Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    handleThemeChange({ backgroundImage: reader.result as string });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <button
            className="remove-background-button"
            onClick={() => {
              handleThemeChange({ backgroundImage: "" });
            }}
          >
            Remove Background Image
          </button>
        </div>
      </div>
      <div className="profile-view-container">
        <ThemeProvider>
          <div className="ProfileView">
            <UserProfile profile={profile as unknown as Profile} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default EditView;
