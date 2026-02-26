
import React from 'react';

const DetectionKitsDetail: React.FC = () => {
  const campData = [
    { type: '检测试剂', usage: 'cAMP detection', cat: '90-0075LM10', desc: 'HitHunter cAMP Assay for Biologics', specs: '1,000/4,000 dp' },
    { type: '检测试剂', usage: 'cAMP detection', cat: '90-0075LM2', desc: 'HitHunter cAMP Assay for Biologics', specs: '200/800 dp' },
    { type: '检测试剂', usage: 'cAMP detection', cat: '90-0075SM10', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '1,000/4,000 dp' },
    { type: '检测试剂', usage: 'cAMP detection', cat: '90-0075SM-HTS800', desc: 'HitHunter cAMP Assay for Small Molecules', specs: '2,000 plates' },
  ];

  const efcData = [
    { type: '检测试剂', usage: 'PathHunter', cat: '93-0001', desc: 'PathHunter Detection Kit', specs: '75 mL (10 plates)' },
    { type: '检测试剂', usage: 'PathHunter Bioassay', cat: '93-0933', desc: 'PathHunter Bioassay Detection Kit', specs: '75 mL (1,000 dp)' },
    { type: '检测试剂', usage: 'PathHunter Bioassay ED', cat: '93-1043', desc: 'PathHunter Bioassay ED Detection Kit', specs: '50 mL (1,000 dp)' },
    { type: '检测试剂', usage: 'PathHunter Flash', cat: '93-0247', desc: 'PathHunter Flash Detection Kit', specs: '125 mL (10 plates)' },
    { type: '检测试剂', usage: 'PathHunter PL/PK', cat: '93-0812', desc: 'PathHunter PL/PK Detection kit', specs: '4,000 dp' },
    { type: '检测试剂', usage: 'ProLabel', cat: '93-0180', desc: 'PathHunter ProLabel Detection Kit', specs: '800 dp' },
    { type: '检测试剂', usage: 'ProLink', cat: '92-0006', desc: 'ProLink Detection Kit', specs: '800 dp' },
  ];

  const specialtyData = [
    { type: '检测试剂', usage: 'InCELL', cat: '96-0079', desc: 'InCELL Detection Kit', specs: '10-plate' },
    { type: '检测试剂', usage: 'InCELL', cat: '96-0079L', desc: 'InCELL Detection Kit', specs: '80-plate' },
    { type: '检测试剂', usage: 'KILR', cat: '97-0001L', desc: 'KILR Detection Kit', specs: '2,500 dp' },
    { type: '检测试剂', usage: 'KILR', cat: '97-0001S', desc: 'KILR Detection Kit', specs: '200 dp' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="w-full mb-12">
      <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-[#4B827E] px-6 py-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">用途</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">货号</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">规格</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium border-r border-slate-50">{row.usage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E] border-r border-slate-50">{row.cat}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.specs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">检测试剂盒 / Detection Kits</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          DiscoverX 提供基于酶片段互补 (EFC) 技术的高灵敏度检测试剂盒，适用于 cAMP 测定、功能性 GPCR 检测、细胞毒性分析以及胞内蛋白互作研究。
        </p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6 mx-auto md:mx-0"></div>
      </div>

      {/* Why Choose Section */}
      <div className="mb-12 bg-slate-100 rounded-xl p-8 border border-slate-200">
        <h4 className="text-[#1C2C5E] font-bold text-lg mb-4 text-center md:text-left">为什么选择 DiscoverX 检测试剂盒？</h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-[#4B827E] transition-colors">
            <h5 className="font-bold text-[#4B827E] mb-2 text-sm uppercase">卓越的灵敏度</h5>
            <p className="text-xs text-slate-600 leading-relaxed">基于化学发光的检测原理，提供极宽的线性动态范围，能够检测低至皮摩尔级别的信号变化。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-[#4B827E] transition-colors">
            <h5 className="font-bold text-[#4B827E] mb-2 text-sm uppercase">非放射性检测</h5>
            <p className="text-xs text-slate-600 leading-relaxed">完全取代传统的放射性同位素检测方法（如 RIA），提供更安全、环保且易于自动化的实验方案。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:border-[#4B827E] transition-colors">
            <h5 className="font-bold text-[#4B827E] mb-2 text-sm uppercase">高通量适用性</h5>
            <p className="text-xs text-slate-600 leading-relaxed">优化的“加样-读数”操作流程，无需洗涤步骤，完美适配 96, 384 乃至 1536 孔板的高通量筛选需求。</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <ProductTable title="cAMP 检测试剂盒 (HitHunter®)" data={campData} />
        <ProductTable title="功能性检测试剂盒 (PathHunter®)" data={efcData} />
        <ProductTable title="特殊应用检测试剂盒 (InCELL / KILR®)" data={specialtyData} />
      </div>

      <div className="mt-12 bg-teal-50 rounded-xl p-8 border border-teal-100">
        <h4 className="text-[#4B827E] font-bold text-lg mb-4">技术说明</h4>
        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm leading-relaxed">
          <li><strong>HitHunter® cAMP:</strong> 利用 EFC 技术开发的均相竞争性免疫测定，专门用于测量细胞内 cAMP 水平的变化。</li>
          <li><strong>PathHunter® Detection:</strong> 通用的 EFC 检测底物，适用于所有表达 EA 和 PK 标签的工程化细胞系。</li>
          <li><strong>KILR® Detection:</strong> 专门用于监测细胞毒性的非放射性替代方案，通过释放标记的 EA 片段实现细胞裂解的定量。</li>
        </ul>
      </div>
    </div>
  );
};

export default DetectionKitsDetail;
