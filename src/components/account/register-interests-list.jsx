import React from "react";
import { FieldArray } from "formik";

export default ({ name, values, errors, onChange, onBlur, t }) => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div id="list-of-interests" className="pt-5">
          <div className="d-flex align-items-center">
            <button
              className="bd-btn bd-circle-btn bd-primary-btn"
              type="button"
              onClick={() => arrayHelpers.push({ name: "" })}>
              <i className="fas fa-plus"></i>
            </button>
            {values.interests && values.interests.length === 0 ? <h1 id="at-least" className="d-inline-block ml-3">{t(`account.sign_up.form.interests.error.min`)}</h1> : ""}
          </div> 
          {values.interests && values.interests.length > 0 ? (
            values.interests.map((hobby, index) => (
              <div key={index} id="hobby-block">
                <div className="form-group bd-form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id={`interests.${index}.name`}
                    name={`interests.${index}.name`}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={values.interests[index].name}
                  />
                  <button
                    className="bd-btn bd-circle-btn bd-primary-btn"
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                {errors && errors[`interests[${index}].name`] && (
                  <div className="invalid-feedback">
                    {t(`account.sign_up.form.interests.item.error.${errors[`interests[${index}].name`]}`)}
                  </div>
                )}
              </div>
            ))
          ) : ("")}
        </div>
      )}
    />
  );
};