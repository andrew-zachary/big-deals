import React from "react";
import { FieldArray } from "formik";

export default ({ name, values, errors, onChange, onBlur }) => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div id="list-of-hobbies" className="pt-5">
          <div className="d-flex align-items-center">
            <button
              className="bd-btn bd-circle-btn bd-primary-btn"
              type="button"
              onClick={() => arrayHelpers.push({ name: "" })}>
              <i className="fas fa-plus"></i>
            </button>
            {values.hobbies && values.hobbies.length === 0 ? <h1 id="at-least" className="d-inline-block ml-3">at least one hobby</h1> : ""}
          </div> 
          {values.hobbies && values.hobbies.length > 0 ? (
            values.hobbies.map((hobby, index) => (
              <div key={index} id="hobby-block">
                <div className="form-group bd-form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id={`hobbies.${index}.name`}
                    name={`hobbies.${index}.name`}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={values.hobbies[index].name}
                  />
                  <button
                    className="bd-btn bd-circle-btn bd-primary-btn"
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                {errors && errors[`hobbies[${index}].name`] && (
                  <div className="invalid-feedback">
                    {errors[`hobbies[${index}].name`]}
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