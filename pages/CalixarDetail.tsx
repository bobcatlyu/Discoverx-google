
import React from 'react';

const CalixarDetail: React.FC = () => {
  const productData = [
    { target: 'CXCR4', family: 'GPCR', status: 'Available', desc: 'Native full-length protein extracted from cell membrane.' },
    { target: 'ADORA2A', family: 'GPCR', status: 'Available', desc: 'High purity, thermostable native receptor.' },
    { target: 'Nav1.5', family: 'Ion Channel', status: 'Inquire', desc: 'Native ion channel extracted using Calixar surfactants.' },
    { target: 'EGFR', family: 'RTK', status: 'Available', desc: 'Full-length native RTK maintaining extracellular and kinase domains.' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">Calixar 膜蛋白提取技术</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Calixar 专利技术为膜蛋白（GPCR、离子通道、转运蛋白等）的提取和纯化带来了革命性的突破。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              传统的提取方法往往使用烈性去垢剂，会导致蛋白质变性或失去天然药理活性。Calixar 利用独特的专利表面活性剂，能够实现在不改变蛋白质构象的前提下，将其从脂质双分子层中完整“剥离”，最大程度保留其天然的功能活性与结构完整性。
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/calixar_tech/800/600" 
                alt="Calixar Technology" 
                className="rounded-2xl shadow-2xl border border-slate-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4B827E] text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                 <p className="text-xs font-bold italic">"We maintain what nature created."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Advantages */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心技术优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "天然构象保护", 
                desc: "在不添加有害去垢剂或进行点突变改造的情况下，提取全长膜蛋白，确保其药理学特性与活细胞表面完全一致。" 
              },
              { 
                title: "卓越的热稳定性", 
                desc: "提取后的蛋白在室温或 4°C 下表现出极高的物理稳定性，是冷冻电镜 (cryo-EM) 和 X 射线晶体学研究的理想选择。" 
              },
              { 
                title: "高灵敏度药物发现", 
                desc: "适用于 SPR、生物膜层干涉 (BLI) 及配体结合实验，能够检测到针对天然构象靶点的微弱结合信号。" 
              }
            ].map((adv, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-xl font-bold text-[#4B827E] mb-4">{adv.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Availability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center md:text-left">可提供产品 / Available Native Proteins</h2>
        <div className="w-full mb-16">
          <div className="w-full overflow-x-auto shadow-2xl rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#4B827E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 whitespace-nowrap">靶点</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20 whitespace-nowrap">家族</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider whitespace-nowrap">状态</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {productData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 font-bold border-r border-slate-100">{row.family}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      <span className={`px-2 py-1 rounded font-bold ${row.status === 'Available' ? 'bg-teal-50 text-[#4B827E]' : 'bg-slate-100 text-slate-500'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#4B827E] rounded-3xl p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">定制提取服务 / Customized Extraction</h3>
              <p className="text-white/80 leading-relaxed">
                Calixar 技术不仅提供现货蛋白，我们还可以为您感兴趣的任何特定靶标（即使是极难表达的靶标）定制开发特定的提取与纯化方案，支持您的抗体发现或结构生物学项目。
              </p>
           </div>
           <button className="whitespace-nowrap bg-white text-[#4B827E] px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg">
             立即咨询技术方案
           </button>
        </div>
      </section>
    </div>
  );
};

export default CalixarDetail;
