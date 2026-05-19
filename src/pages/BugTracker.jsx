import { useState } from 'react';

const badgeStyle = {
  padding: '4px 8px',
  borderRadius: '999px',
  fontSize: '12px',
};

export default function BugTracker() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'مثال خطأ 1', date: '2026-05-19', description: 'وصف الخطأ 1', status: 'مفتوح' },
    { id: 2, title: 'مثال خطأ 2', date: '2026-05-18', description: 'وصف الخطأ 2', status: 'مغلق' },
  ]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newBug = {
      id: Date.now(),
      title,
      date: new Date().toLocaleDateString('en-CA'),
      description,
      status: 'مفتوح',
    };

    setBugs([newBug, ...bugs]);
    setTitle('');
    setDescription('');
  };

  const toggleStatus = (id) =>
    setBugs((s) => s.map((b) => (b.id === id ? { ...b, status: b.status === 'مفتوح' ? 'مغلق' : 'مفتوح' } : b)));

  const deleteBug = (id) => setBugs((s) => s.filter((b) => b.id !== id));

  return (
    <div style={{ padding: 20, textAlign: 'right', direction: 'rtl', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', marginBottom: '20px' }}>🪲 متتبع الأخطاء البرمجية</h1>

      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '25px' }}>
        <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#1e293b' }}>تسجيل خطأ تقني جديد</h3>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#475569' }}>عنوان المشكلة:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="مثال: زر الإرسال لا يستجيب"
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#475569' }}>وصف المشكلة:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="وصف مختصر للمشكلة أو خطوات إعادة الإنتاج"
            style={{ width: '100%', minHeight: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' }}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button type="button" onClick={() => { setTitle(''); setDescription(''); }} style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff' }}>مسح</button>
          <button type="submit" style={{ padding: '8px 12px', borderRadius: '6px', border: 'none', background: '#10b981', color: '#fff' }}>إضافة الخطأ</button>
        </div>
      </form>

      {bugs.length === 0 ? (
        <p style={{ color: '#64748b' }}>لا توجد أخطاء مسجلة.</p>
      ) : (
        bugs.map((bug) => (
          <div key={bug.id} style={{ border: '1px solid #e5e7eb', padding: 12, borderRadius: 8, marginBottom: 12, textAlign: 'right' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '16px', color: '#0f172a' }}>{bug.title}</strong>
                <span style={{ fontSize: '12px', color: '#94a3b8', marginRight: 10 }}>{bug.date}</span>
              </div>
            </div>

            <p style={{ whiteSpace: 'pre-line', color: '#475569', fontSize: '14px', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', margin: '10px 0' }}>
              {bug.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ ...badgeStyle, backgroundColor: bug.status === 'مفتوح' ? '#fee2e2' : '#dcfce7', color: bug.status === 'مفتوح' ? '#991b1b' : '#15803d' }}>
                  {bug.status}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => toggleStatus(bug.id)} style={{ padding: '6px 12px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  تغيير الحالة
                </button>

                <button onClick={() => deleteBug(bug.id)} style={{ padding: '6px 12px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
