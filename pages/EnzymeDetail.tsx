
import React from 'react';

const EnzymeDetail: React.FC = () => {
  const productData = [
    { category: 'Kinases', name: 'Active Human EGFR', desc: 'Full-length, high purity active protein for kinase assays.', app: 'Screening, SPR' },
    { category: 'Kinases', name: 'JAK2 JH1/JH2', desc: 'Active catalytic domain for TKI evaluation.', app: 'Bioassay, Profiling' },
    { category: 'Phosphatases', name: 'PTPN11 (SHP-2)', desc: 'Active recombinant phosphatase.', app: 'Inhibitor Screening' },
    { category: 'Epigenetics', name: 'BRD4 Bromodomain 1', desc: 'Purified reader domain for binding assays.', app: 'AlphaLISA, TR-FRET' },
    { category: 'Epigenetics', name: 'HDAC6', desc: 'Recombinant human HDAC6 active enzyme.', app: 'Enzymatic Activity' },
    { category: 'DNA Helicases', name: 'RecQ Helicase', desc: 'Validated for DNA unwinding assays.', app: 'Biochemical Assays' },
    { category: 'Detection Kits', name: 'ADP-Glo Kinase Kit', desc: 'Universal kit for measuring kinase activity.', app: 'High-throughput Screening' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">重组酶类产品 (Recombinant Enzymes)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              高纯度的活性酶是生物化学研究、药物筛选及谱图分析的基石。Eurofins DiscoverX 提供数以千计的高质量、经过功能验证的重组酶类产品。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              我们的酶产品经过严格的质量评估，确保在各种体外实验（如激酶谱分析、抑制剂筛选、动力学研究等）中能够提供卓越的一致性与可靠性。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/enzyme_science/800/600" 
              alt="Recombinant Enzyme Production" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Portfolio Showcase */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心产品系列 (Core Portfolio)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "重组激酶 (Kinases)", desc: "涵盖 400 多种活性人类激酶，包括 RTKs, CTKs 以及临床相关的突变型激酶，支持先导化合物优化。" },
              { title: "磷酸酶 (Phosphatases)", desc: "高活性重组磷酸酶，用于研究信号传导反馈机制及抑制剂筛选。" },
              { title: "表观遗传蛋白 (Epigenetic Proteins)", desc: "包含 Bromodomains, HDACs, HMTs, HDMs 等关键表观遗传调控蛋白，助力肿瘤与代谢疾病研究。" },
              { title: "DNA 解旋酶 (Helicases)", desc: "包括活性解旋酶与核酸酶，适用于 DNA 稳定性与损伤修复及复制相关研究。" },
              { title: "激酶检测试剂盒 (Enzyme Activity Detection Kit)", desc: "配套的通用型酶底物与检测系统，简化您的激酶活性实验搭建流程。" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#4B827E] hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] mb-6 font-bold">0{i+1}</div>
                <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product List Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">代表性重组酶列表 / Enzyme List</h2>
        <div className="flex justify-start">
          <div className="inline-block max-w-full overflow-x-auto shadow-2xl rounded-2xl border border-slate-200">
            <table className="divide-y divide-slate-200">
              <thead className="bg-[#4B827E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 whitespace-nowrap">分类</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 whitespace-nowrap">产品名称</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">主要应用</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {productData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-500 border-r border-slate-100">{row.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-[#4B827E] font-medium">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnzymeDetail;
