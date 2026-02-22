
import React from 'react';

const CytotoxicityDetail: React.FC = () => {
  const productData = [
    { type: 'Primary Cell', target: 'CD16 Effector Cell', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'EGFR', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'PD-L1', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'PD-L2', moa: 'Cytotoxicity', host: 'U2OS', desc: 'Osteosarcoma' },
    { type: 'Cell Line', target: 'LAG3', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Line', target: 'PD-1', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Line', target: 'TIM3', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: '4T1', desc: 'Mouse mammary gland carcinoma' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'A-498', desc: 'Renal cell carcinoma (kidney)' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'A549', desc: 'Lung cancer' },
    { type: 'Cell Pool', target: 'HER2; HER3', moa: 'Cytotoxicity', host: 'BT-474', desc: 'Mammary ductal carcinoma' },
    { type: 'Cell Pool', target: 'CCR4', moa: 'Cytotoxicity', host: 'CCRF-CEM', desc: 'T lymphocyte (CCR4+)' },
    { type: 'Cell Pool', target: 'Gpa33', moa: 'Cytotoxicity', host: 'COLO-205', desc: 'Colorectal cancer' },
    { type: 'Cell Pool', target: 'CD19; CD20; CD38', moa: 'Cytotoxicity', host: 'Daudi', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'EFGR; HER2', moa: 'Cytotoxicity', host: 'DU-145', desc: 'Prostate carcinoma' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'EL4', desc: 'Mouse T lymphocyte line' },
    { type: 'Cell Pool', target: 'EGFR; B7-H3', moa: 'Cytotoxicity', host: 'H322', desc: 'NSCLC' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'HCT-116', desc: 'Colorectal carcinoma' },
    { type: 'Cell Pool', target: 'Glypican', moa: 'Cytotoxicity', host: 'HepG2', desc: 'Hepatocellular carcinoma' },
    { type: 'Cell Pool', target: 'CD33; CD38', moa: 'Cytotoxicity', host: 'HL-60', desc: 'Promyeloblast' },
    { type: 'Cell Pool', target: 'NY-ESO-1 (CTAG1A)', moa: 'Cytotoxicity', host: 'HT1080', desc: 'Fibrosarcoma' },
    { type: 'Cell Pool', target: 'GITR; CD30', moa: 'Cytotoxicity', host: 'Hut78', desc: 'Cutaneous T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'Jurkat', desc: 'T lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'K562', desc: 'Bone Marrow; Chronic Myelogenous Leukemia (CML)' },
    { type: 'Cell Pool', target: 'HER2', moa: 'Cytotoxicity', host: 'MCF7', desc: 'Breast adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD73; PD-L1; B7-H3', moa: 'Cytotoxicity', host: 'MDA-MB-231', desc: 'Breast cancer' },
    { type: 'Cell Pool', target: 'BCMA', moa: 'Cytotoxicity', host: 'MM-1R', desc: 'Multiple myeloma' },
    { type: 'Cell Pool', target: 'CD3; CD38', moa: 'Cytotoxicity', host: 'MOLT-4', desc: 'T-lymphoblast (Acute Lymphoblastic Leukemia)' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'NCI-H292', desc: 'NSCLC (Squamous)' },
    { type: 'Cell Pool', target: 'EGFR; HER2; B7-H3', moa: 'Cytotoxicity', host: 'NCI-N87', desc: 'Gastric cancer' },
    { type: 'Cell Pool', target: 'EGFR', moa: 'Cytotoxicity', host: 'PANC-1', desc: 'Pancreatic cancer' },
    { type: 'Cell Pool', target: 'CD19; CD20; CD38', moa: 'Cytotoxicity', host: 'Raji', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'CD19; CD20', moa: 'Cytotoxicity', host: 'Ramos', desc: "Burkitt's lymphoma" },
    { type: 'Cell Pool', target: 'GITR; BCMA', moa: 'Cytotoxicity', host: 'RPMI 8226', desc: 'B lymphocyte' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'SKBR3', desc: 'Breast adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'SK-MEL-28', desc: 'Melanoma' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'SK-MEL-5', desc: 'Melanoma' },
    { type: 'Cell Pool', target: 'HER2; PD-L1', moa: 'Cytotoxicity', host: 'SKOV3', desc: 'Ovarian adenocarcinoma' },
    { type: 'Cell Pool', target: 'CD25; CD30', moa: 'Cytotoxicity', host: 'SR', desc: 'Lymphoblast' },
    { type: 'Cell Pool', target: '--', moa: 'Cytotoxicity', host: 'T2 (174 xCEM.T2)', desc: 'Lymphoblast' },
    { type: 'Cell Pool', target: 'CD33', moa: 'Cytotoxicity', host: 'THP-1', desc: 'AML' },
    { type: 'Cell Pool', target: 'CD73', moa: 'Cytotoxicity', host: 'U118-MG', desc: 'Glioblastoma' },
    { type: 'Cell Pool', target: 'CD20', moa: 'Cytotoxicity', host: 'WIL2-S', desc: 'B lymphoblast (hereditary spherocytosis)' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">细胞毒性效应 (Cytotoxicity)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              细胞毒性测定是评估治疗性抗体、T 细胞重定向药物以及 CAR-T 疗法杀伤靶细胞能力的核心实验。准确、高通量的细胞毒性检测对于药物筛选和效价评估至关重要。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              传统的放射性同位素释放法（如 <sup>51</sup>Cr 释放）存在安全性问题且操作复杂。Eurofins DiscoverX 的 KILR® 平台提供了一种非放射性、均相且易于自动化的替代方案。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/cytotoxicity_lab/800/600" 
              alt="Cytotoxicity Assay" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section - KILR Technology */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">KILR® 作用机制与应用场景</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-[#4B827E] mb-6">KILR® 技术原理 (Enzyme Fragment Complementation)</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                KILR 细胞系预先在胞内稳定表达融合了酶受体 (EA) 标签的管家蛋白。当靶细胞受到免疫效应细胞或药物攻击导致细胞膜完整性受损（死亡）时，EA 标签会释放到培养基中。在检测阶段加入含有酶供体 (PK) 的底物溶液，两者结合产生极强的发光信号。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "ADCC/ADCP", desc: "评估抗体通过其 Fc 段招募 NK 细胞或巨噬细胞诱导靶细胞死亡的能力。" },
                  { title: "CDC 效应", description: "监测补体依赖性细胞毒性，无需使用同位素，实现实时动力学追踪。" },
                  { title: "T-cell Redirection", description: "评估双特异性或多特异性抗体通过招募 T 细胞对肿瘤细胞进行的重定向杀伤。" },
                  { title: "CAR-T/TCR-T", description: "定量分析工程化 T 细胞对特异性抗原表达细胞的特异性溶解效率。" },
                  { title: "动力学分析", description: "由于 EFC 信号极强且背景极低，可支持长达 24-48 小时的杀伤动力学监测。" },
                  { title: "高通量兼容", description: "均相操作，无需洗涤，完美适配 384/1536 孔板自动化药物筛选。" }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                    <h4 className="font-bold text-[#1C2C5E] mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc || (item as any).description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10">细胞毒性产品列表 / Cytotoxicity Portfolio</h2>
        <div className="overflow-x-auto shadow-xl rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-[#4B827E] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">产品类型</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">Targets / Antigens</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">MoA</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">细胞种类</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">细胞描述</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {productData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 border-r border-slate-100">{row.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 border-r border-slate-100">{row.moa}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#4B827E] border-r border-slate-100">{row.host}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm italic">
            * 列表中未提及的靶点可联系我们进行 KILR® Retroparticles 定制构建。
          </p>
        </div>
      </section>
    </div>
  );
};

export default CytotoxicityDetail;
