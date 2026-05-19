import { useState } from 'react';

export default function Dashboard() {
  const [stats] = useState(() => {
    const base = { total: 0, open: 0, resolved: 0 };
    try {
      const saved = localStorage.getItem('lumina_bugs_data');
      if (!saved) return base;
      const bugsArray = JSON.parse(saved);
      if (!Array.isArray(bugsArray)) return base;
      const total = bugsArray.length;
      const open = bugsArray.filter((b) => b.status === 'مفتوح').length;
      const resolved = bugsArray.filter((b) => b.status === 'مغلق').length;
      return { total, open, resolved };
    } catch {
      return base;
    }
  });

  return (
    <div style={{ padding: '30px 20px', textAlign: 'right', direction: 'rtl', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* العنوان الرئيسي مع مسافة أمان تمنع التداخل */}
      <div style={{ marginBottom: '35px' }}>
        <h1 style={{ color: '#1e293b', margin: '0 0 12px 0', fontSize: '28px', fontWeight: 'bold', lineHeight: '1.4' }}>
          📊 لوحة التحكم (Dashboard)
        </h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
          ملخص فوري لحالة النظام وإحصائيات تتبع الجودة والأخطاء البرمجية المكتشفة.
        </p>
      </div>

      {/* شبكة البطاقات الإحصائية (Cards) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        
        {/* بطاقة إجمالي الأخطاء */}
        <div style={{ ...cardStyle, borderRight: '6px solid #3b82f6' }}>
          <h4 style={cardTitleStyle}>إجمالي المشاكل</h4>
          <p style={{ ...cardNumStyle, color: '#3b82f6' }}>{stats.total}</p>
        </div>

        {/* بطاقة الأخطاء المفتوحة */}
        <div style={{ ...cardStyle, borderRight: '6px solid #ef4444' }}>
          <h4 style={cardTitleStyle}>المشاكل المفتوحة 🔴</h4>
          <p style={{ ...cardNumStyle, color: '#ef4444' }}>{stats.open}</p>
        </div>

        {/* بطاقة الأخطاء المصلحة */}
        <div style={{ ...cardStyle, borderRight: '6px solid #22c55e' }}>
          <h4 style={cardTitleStyle}>المشاكل المحلولة 🟢</h4>
          <p style={{ ...cardNumStyle, color: '#22c55e' }}>{stats.resolved}</p>
        </div>

      </div>

      {/* قسم الملاحظات والترحيب السفلي */}
      <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h3 style={{ marginTop: 0, marginBottom: '10px', color: '#0f172a' }}>👋 ملاحظات النظام</h3>
        <p style={{ color: '#475569', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
          يمكنكِ تسجيل أخطاء جديدة وتحديث حالتها فوراً من صفحة "متتبع الأخطاء (QA)"، لتنعكس الأرقام والإحصائيات هنا تلقائياً في لوحة التحكم.
        </p>
      </div>
    </div>
  );
}

// تنسيقات البطاقات الاحترافية لتبدو مرتبة ومتباعدة
const cardStyle = {
  background: '#fff',
  padding: '24px 20px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
  border: '1px solid #e5e7eb',
};

const cardTitleStyle = { 
  margin: 0, 
  color: '#475569', 
  fontSize: '14px', 
  fontWeight: '600' 
};

const cardNumStyle = { 
  margin: '12px 0 0 0', 
  fontSize: '36px', 
  fontWeight: 'bold',
  lineHeight: '1'
};