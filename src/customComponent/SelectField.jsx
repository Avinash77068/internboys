const SelectField = ({ label, name, options, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {label} {required && "*"}
    </label>
    <select
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 bg-white"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;