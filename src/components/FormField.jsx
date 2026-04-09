export function FormField({
  label,
  placeholder,
  value,
  type = 'text',
  name,
  onChange,
  error,
  autoComplete,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 ml-3 inline-block bg-white px-1 text-[13px] font-semibold text-[#8f4bff]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        className={`-mt-3 block h-12 w-full rounded-[10px] border px-4 text-[15px] font-medium text-ink-900 outline-none placeholder:text-[#b8b8b8] focus:border-brand-400 ${
          error ? 'border-red-400' : 'border-ink-300'
        }`}
      />
      {error ? <span className="mt-1.5 block text-sm font-medium text-red-500">{error}</span> : null}
    </label>
  )
}
