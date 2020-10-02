import React from "react";

function RefineByType(props) {
  const {
    types,
    valueIdTitle,
    valueByType,
    handleByType,
    countProducts,
  } = props;

  const onChange = (type) => {
    const newChecked = [...valueByType];

    const currentType = newChecked.indexOf(type);
    console.log(currentType);
    if (currentType === -1) {
      newChecked.push(type);
    } else {
      newChecked.splice(currentType, 1);
    }
    handleByType(newChecked);
  };

  return (
    <div className="refine-by-type">
      <ul>
        {types
          .filter((e) => e.id === valueIdTitle)
          .map((e) =>
            e.subs.map((e) => (
              <li key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={valueByType.includes(e.type) ? true : false}
                  onChange={() => onChange(e.type)}
                />
                <label htmlFor={e.id}>
                  {e.type} (
                  {
                    countProducts.filter((product) => product.type === e.type)
                      .length
                  }
                  )
                </label>
              </li>
            ))
          )}
      </ul>
    </div>
  );
}

export default RefineByType;