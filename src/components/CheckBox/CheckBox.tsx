import { useState } from 'react';

const checkboxesData = [
  {
    name: 'Some name 1',
    min: 1,
    max: 2,
    children: [
      { label: 'Label 1', value: 'Value 1' },
      { label: 'Label 2', value: 'Value 2' },
    ],
  },
  {
    name: 'Some name 2',
    min: 1,
    max: 1,
    children: [
      { label: 'Label 3', value: 'Value 3' },
      { label: 'Label 4', value: 'Value 4' },
    ],
  },
];

const CheckboxForm = () => {
  const [formData, setFormData] = useState<any>({});

  const handleCheckboxChange = (name: string, value: string, isChecked: boolean) => {
    setFormData((prevData: any) => {
      const updatedData = {
        ...prevData,
        [name]: { ...(prevData[name] || {}), [value]: isChecked },
      };
      return updatedData;
    });
  };

  const isCheckboxValid = (name: string, count: number) => {
    const { min, max } = checkboxesData.find((data) => data.name === name)!;
    return count >= min && count <= max;
  };

  const isFormValid = () => {
    for (const { name, children } of checkboxesData) {
      const checkedCount = Object.values(formData[name] || {}).filter(Boolean).length;
      if (!isCheckboxValid(name, checkedCount)) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {checkboxesData.map(({ name, children }) => (
        <div key={name}>
          <h3>{name}</h3>
          {children.map(({ label, value }) => (
            <label key={value}>
              <input
                type="checkbox"
                checked={formData[name]?.[value] || false}
                onChange={(e) => handleCheckboxChange(name, value, e.target.checked)}
              />
              {label}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
