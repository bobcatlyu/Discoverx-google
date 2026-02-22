
import React from 'react';

const CustomCellLineDev: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">细胞株工程与方法开发 (Custom Cell Line & Assay Development)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Eurofins DiscoverX 拥有超过 20 年的细胞株工程经验，已成功开发出 1,000 多种功能性分析方法。我们利用专有的技术平台，为您提供从头开始的定制化细胞株构建与方法学开发服务。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              无论您的靶点是复杂的 GPCR、离子通道、激酶，还是新兴的治疗靶标，我们的专家团队都能为您量身定制最符合研发需求的检测方案。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/custom_dev_lab/800/600" 
              alt="Custom Development" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">核心能力与专业服务</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">稳定细胞株构建</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用哺乳动物表达系统，为您构建高表达且遗传稳定的功能性细胞株。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 支持多种宿主细胞 (CHO, HEK293, U2OS等)</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 优化启动子与载体系统</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 严格的单克隆筛选与验证过程</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">生物药方法开发 (Potency Assays)</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                为抗体、双特异性分子及 ADC 开发稳健的方法学，支持药物的效价评估 (Potency) 及中和活性测试。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 模拟作用机制 (MOA) 的检测方案</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 灵敏度、精准度及动态范围优化</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 符合药典及监管要求的验证支持</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">CRISPR/Cas9 内源标签</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                利用 CRISPR 技术在内源水平插入 EFC 标签 (ED)，用于监测蛋白在自然表达水平下的周转与降解。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 无需外源性启动子，维持生理相关性</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 专为 PROTAC 及分子胶筛选设计</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 全面的基因编辑效率验证</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Platforms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">基于领先的技术平台</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">酶片段互补技术 (EFC)</h3>
              <p className="text-slate-600 leading-relaxed">
                EFC 技术是我们的核心，它允许我们在活细胞中通过非放射性、均相的化学发光法监测几乎任何蛋白质的相互作用、易位或水平变化。
              </p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">广泛的检测格式 (Assay Formats)</h3>
              <p className="text-slate-600 leading-relaxed">
                我们的定制开发涵盖了 cAMP, 钙流, β-Arrestin 招募, 二聚化, 内吞, 蛋白-蛋白相互作用 (PPI) 等多种格式，为您提供最匹配的作用机制数据。
              </p>
            </div>
          </div>
          {/* Changed bg-[#1C2C5E] to bg-[#4B827E] */}
          <div className="bg-[#4B827E] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
             <h4 className="text-xl font-bold mb-6 flex items-center">
               <svg className="w-6 h-6 mr-3 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
               检测开发优势
             </h4>
             <ul className="space-y-4">
               {[
                 "极高的灵敏度与信噪比",
                 "均相检测，无需复杂的洗涤步骤",
                 "完美适配 HTS 自动化流程 (384/1536)",
                 "批次间数据高度一致，CV值低"
               ].map((text, i) => (
                 <li key={i} className="flex items-start">
                   <span className="text-white/40 mr-3 font-bold">✓</span>
                   <span className="text-white/90">{text}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-16 text-center">标准定制化服务流程</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4B827E]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "需求沟通", desc: "与专家沟通靶点特征，确定最匹配的细胞背景与检测技术。" },
                { step: "02", title: "载体构建与转化", desc: "定制化合成基因，构建表达载体并转入目标宿主细胞。" },
                { step: "03", title: "单克隆筛选", desc: "通过多轮筛选获得响应值高、稳定性好的最佳克隆。" },
                { step: "04", title: "验证与交付", desc: "提供全面的性能数据报告、操作手册及最终细胞株。" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-[#4B827E] transition-all">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-[#4B827E] flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-[#4B827E] group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-[#1C2C5E] mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        {/* Changed gradient from-[#1C2C5E] to-[#4B827E] to Teal focused */}
        <div className="bg-gradient-to-r from-[#4B827E] to-[#3d6b67] rounded-[2rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-white">准备好开启您的定制项目了吗？</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            填写您的项目需求，我们的技术专家将在 24 小时内为您提供初步的技术建议与报价方案。
          </p>
          <button className="bg-white text-[#4B827E] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
            立即咨询专家
          </button>
        </div>
      </section>
    </div>
  );
};

export default CustomCellLineDev;
