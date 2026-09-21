const images = [
  { name: 'School assembly', type: 'Image', updated: '12 Sep 2026' },
  { name: 'Sports day gallery', type: 'Gallery', updated: '09 Sep 2026' },
  { name: 'Leadership forum banner', type: 'Image', updated: '04 Sep 2026' }
];

export default function AdminImagesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Images</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Media library</h1>
        </div>
        <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Upload media</button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {images.map((image) => (
          <article key={image.name} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-navy/10">
            <div className="h-40 rounded-2xl bg-gradient-to-br from-blue/20 via-sky to-gold/30" />
            <p className="mt-4 text-xl font-bold text-navy">{image.name}</p>
            <p className="mt-2 text-slate-700">{image.type} • {image.updated}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
