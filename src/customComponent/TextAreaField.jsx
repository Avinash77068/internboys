const TextAreaField = ({ label, name, value, onChange, required, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {label} {required && "*"}
    </label>
    <textarea
      name={name}
      rows={3}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 bg-white resize-none"
    />
  </div>
);

export default TextAreaField;