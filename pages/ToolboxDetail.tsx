
import React from 'react';

const ToolboxDetail: React.FC = () => {
  const vectorsData = [
    { app: 'Bundle', cat: '93-0491', desc: 'ProLink Cloning Vector Bundle', specs: '4 Vectors' },
    { app: 'Bundle', cat: '93-1109', desc: 'ProLabel Cloning Vector Bundle', specs: '2 Vectors' },
    { app: 'N Vector', package: '93-0009', desc: 'pCMV-ProLabel N Vector', specs: '1 Vector' },
    { app: 'C Vector', package: '93-0012', desc: 'pCMV-ProLabel C Vector', specs: '1 Vector' },
    { app: 'PK1', package: '93-0167', desc: 'pCMV-ProLink 1 Vector', specs: '1 Vector' },
    { app: 'PK2', package: '93-0171', desc: 'pCMV- ProLink 2 Vector', specs: '1 Vector' },
    { app: 'ARMS1', package: '93-0489', desc: 'pCMV-ARMS1-ProLink 2 Vector', specs: '1 Vector' },
    { app: 'ARMS2', package: '93-0490', desc: 'pCMV-ARMS2-ProLink 2 Vector', specs: '1 Vector' },
  ];

  const retroData = [
    { app: 'Cytotoxicity', cat: '97-0002', desc: 'KILR Retroparticles for Suspension Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0003', desc: 'KILR Retroparticles for Adherent Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0004', desc: 'KILR Retroparticles for Adherent & Suspension Cells (G418)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0005', desc: 'KILR Retroparticles for Adherent Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0006', desc: 'KILR Retroparticles for Suspension Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'Cytotoxicity', cat: '97-0008', desc: 'KILR Retroparticles for Adherent & Suspension Cells (Hygromycin B)', specs: '4 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-1087', desc: 'PathHunter β-Arrestin2 Retroparticles', specs: '4 vials x 0.5 mL' },
  ];

  const parentalData = [
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0164', desc: 'PathHunter CHO-K1 β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0165', desc: 'PathHunter HEK 293 β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0166', desc: 'PathHunter U2OS β-Arrestin2-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0318', desc: 'PathHunter U2OS β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0521', desc: 'PathHunter CHO-K1 β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR β-Arrestin Recruitment', cat: '93-0798', desc: 'PathHunter HEK 293 β-Arrestin1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0004', desc: 'PathHunter CHO-K1 NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0178', desc: 'PathHunter U2OS NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Pathway Translocation', cat: '93-0797', desc: 'PathHunter HEK 293 NUC-EA Parental Cell Line', specs: '2 vials' },
    { app: 'GPCR Pharmacotraffiking', cat: '93-1101C3', desc: 'PathHunter U2OS MEM-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Internalization', cat: '93-1102C3', desc: 'PathHunter U2OS ENDO-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Kinase SH2 Recruitment', cat: '93-1123C3', desc: 'PathHunter U2OS SHC1-EA Parental Cell Line', specs: '2 vials' },
    { app: 'Kinase SH2 Recruitment', cat: '93-1124C3', desc: 'PathHunter U2OS mPLCG1(SH2)-EA Parental Cell Line', specs: '2 vials' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">应用 (Application)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">货号 (Cat No.)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">描述 (Description)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">规格 (Specs)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.app}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E]">{row.cat || row.package}</td>
                <td className="px-6 py-4 text-sm text-slate-900">{row.desc}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.specs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">工具箱产品 / Toolbox Products</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          DiscoverX 提供全套工具箱产品，包括克隆载体、反转录颗粒以及经过验证的亲本细胞株，助力您快速建立定制化的功能检测系统。
        </p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="space-y-4">
        <ProductTable title="质粒 Vectors" data={vectorsData} />
        <ProductTable title="逆转录病毒颗粒 Retroparticles" data={retroData} />
        <ProductTable title="亲本细胞株 Parental Cell Lines" data={parentalData} />
      </div>

      <div className="mt-12 bg-teal-50 rounded-xl p-8 border border-teal-100">
        <h4 className="text-[#4B827E] font-bold text-lg mb-4">技术说明</h4>
        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm leading-relaxed">
          <li><strong>Vectors:</strong> 包含 ProLink™ (PK) 和 Enzyme Acceptor (EA) 标签载体，适用于构建 EFC 检测系统。</li>
          <li><strong>Retroparticles:</strong> 预包装的病毒颗粒，可直接用于瞬时或稳定转染，快速引入检测组件。</li>
          <li><strong>Parental Cell Lines:</strong> 已稳定表达 EA 融合蛋白的细胞系，只需转入 PK 标记的靶点受体即可进行功能检测。</li>
        </ul>
      </div>
    </div>
  );
};

export default ToolboxDetail;
