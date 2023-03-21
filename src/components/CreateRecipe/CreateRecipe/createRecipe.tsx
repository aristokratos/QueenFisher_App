import React, { useState } from 'react';
import styles from './createRecipe.module.css';
import { Link } from 'react-router-dom';

interface RecipeFormData {
  name: string;
  mealType: string;
  ingredients: string;
  picture: string;
  video?: string;
  procedure: string;
  country: string;
  summary: string;
}

const mealTypeOptions = ['Breakfast', 'Lunch', 'Dinner'];
const countryOptions = ['Nigeria', 'USA', 'Italy', 'Japan'];

const CreateRecipe: React.FC = () => {
  // <div className={styles['details']}>
  const [formData, setFormData] = useState<RecipeFormData>({
    name: 'Type a name',
    mealType: 'Select',
    ingredients: 'e.g sauce, pepper, etc',
    picture: '',
    procedure: '',
    country: 'Select',
    summary: 'Type Description here...',
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          picture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          video: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles['create-recipe']}>
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className={styles['input-menu']}>
          <div className={styles['title']}>
            <p>Create Recipe</p>
            <span>Fill the list of items below</span>
          </div>
          <div className={styles['recipe-name']}>
            <label>Name of Recipe</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['meal']}>
            <div className={styles['ingredient']}>
              <label>Meal Type </label>
              <select
                className={styles['ingredients']}
                name="mealType"
                value={formData.mealType || ''}
                onChange={handleInputChange}
                required
              >
                <option value=""></option>
                {mealTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* <input type="text" name="summary" placeholder="Select" value={formData.summary} onChange={handleInputChange} required /> */}

            <div className={styles['ingredient']}>
              <label>
                {' '}
                Ingredients:
                <select
                  className={styles['ingredients']}
                  name="ingredients"
                  value={formData.ingredients || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value=""></option>
                  {mealTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className={styles['picture']}>
            <div className={styles['pic-inner']}>
              <label> Upload Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
              />
              {formData.picture && (
                <img
                  src={formData.picture}
                  alt="Recipe"
                  className="recipe-picture"
                />
              )}
            </div>
            <div></div>
            <div className={styles['pic-inner']}>
              <label>Upload Video (optional):</label>
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
              />
              {formData.video && (
                <video src={formData.video} controls className="recipe-video" />
              )}
            </div>
          </div>
          <div className={styles['procedure']}>
            <div className={styles['proMenu']}>
              <p>
                Procedure:
                <textarea
                  name="procedure"
                  value={formData.procedure}
                  onChange={handleInputChange}
                  required
                />
              </p>
              <p className={styles['country']}>
                Country:
                {/* <select name="country" value={formData.country} onChange={handleInputChange} required /> */}
                <select
                  className={styles['country']}
                  name="country"
                  value={formData.country || ''}
                  onChange={handleInputChange}
                  required
                >
                  <option value=""></option>
                  {countryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </p>
            </div>
          </div>
        </div>
        <div className={styles['summary']}>
          <label>Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles['btn']}>
          <button className={styles.button}>
            <Link to="/recipe-confirm">Generate</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
