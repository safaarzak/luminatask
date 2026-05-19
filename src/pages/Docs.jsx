export default function Docs() {
  const sections = [
    {
      title: '📋 1. دورة حياة فحص البرمجيات (STLC)',
      content: 'تبدأ عملية الفحص من تحليل المتطلبات، ثم كتابة خطة الفحص (Test Plan)، تليها كتابة حالات الفحص (Test Cases)، ثم التنفيذ الفعلي ورصد الأخطاء وإرسالها للمطورين.'
    },
    {
      title: '🔍 2. كيفية كتابة تقرير خطأ برمي (Bug Report)',
      content: 'التقرير الاحترافي يجب أن يحتوي على: عنوان واضح ومختصر، خطوات إعادة إنتاج الخطأ بالتفصيل (Steps to Reproduce)، النتيجة المتوقعة (Expected Result)، والنتيجة الفعلية الحالية (Actual Result).'
    },
    {
      title: '⚡ 3. مستويات الخطورة والأولوية (Severity vs Priority)',
      content: '• الخطورة (Severity): تقيس مدى تأثير الخطأ التقني على النظام (مثل توقف الموقع بالكامل).\n• الأولوية (Priority): تحدد سرعة الحاجة لإصلاح الخطأ من الناحية التجارية وإدارة المشروع.'
    }
  ];

  return (
    <div style={{ padding: '30px 20px', textAlign: 'right', direction: 'rtl', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* رأس الصفحة */}
      <div style={{ marginBottom: '35px', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px' }}>
        <h1 style={{ color: '#1e293b', margin: '0 0 10px 0', fontSize: '28px', fontWeight: 'bold' }}>
          📄 التوثيق ودليل الجودة (QA Documentation)
        </h1>
        <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>
          مرجع إرشادي شامل لأساسيات هندسة جودة البرمجيات ومعايير توثيق الأخطاء التقنية.
        </p>
      </div>

      {/* عرض الأقسام التعليمية */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {sections.map((section, index) => (
          <div 
            key={index} 
            style={{ 
              background: '#fff', 
              padding: '20px', 
              borderRadius: '10px', 
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)' 
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', color: '#1e293b', fontSize: '18px', fontWeight: 'bold' }}>
              {section.title}
            </h3>
            <p style={{ 
              color: '#475569', 
              fontSize: '15px', 
              lineHeight: '1.7', 
              margin: 0, 
              whiteSpace: 'pre-line',
              backgroundColor: '#f8fafc',
              padding: '12px',
              borderRadius: '6px'
            }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}