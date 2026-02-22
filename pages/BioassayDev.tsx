
import React from 'react';

const BioassayDev: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">生物活性检测方法开发与应用 (Bioassay Development & Implementation)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              专业的生物活性分析方法开发服务，支持从药物发现、先导化合物优化到临床申报及商业化生产的全生命周期。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              我们为生物类似药、创新抗体（包括双特异性抗体、ADC）、细胞因子及基因治疗药物提供高度定制化的效价评估 (Potency Assays) 和中和抗体检测 (NAb Assays) 方案。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/bioassay_lab/800/600" 
              alt="Bioassay Development" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Capabilities Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">全面的方法学开发能力</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">效价分析 (Potency Assays)</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                开发符合监管要求的生物活性检测方法，用于测定生物药的相对效力。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 基于 MOA (作用机制) 的检测设计</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 优化动态范围与 S/B 比</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 支持 4 参数逻辑 (4PL) 拟合分析</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">中和抗体分析 (NAb Assays)</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                设计高灵敏度的基于细胞的检测方法，用于评估临床样品中中和抗体对生物药活性的抑制作用。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 优化的药物耐受性 (Drug Tolerance)</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 高灵敏度的检测格式</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 验证数据的稳健性与可靠性</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#1C2C5E] mb-4">方法验证与转移</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                确保开发的分析方法具有高度的可重复性和稳定性，便于向 CRO 或 CDMO 合作伙伴转移。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 遵循 ICH Q2(R1) 指南进行验证</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 详细的标准操作程序 (SOP) 编写</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 远程或现场技术转移支持</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Platforms Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">支持多种生物药开发阶段</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">早期药物发现</h3>
              <p className="text-slate-600 leading-relaxed">
                快速建立高通量筛选方法，对候选克隆进行生物活性排序。
              </p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">IND 申报与临床研究</h3>
              <p className="text-slate-600 leading-relaxed">
                开发经过预验证的方法，支持 IND 申报所需的药理学研究及早期临床样品的免疫原性评估。
              </p>
            </div>
            <div className="border-l-4 border-[#4B827E] pl-6">
              <h3 className="text-2xl font-bold text-[#1C2C5E] mb-2">CMC 与质控</h3>
              <p className="text-slate-600 leading-relaxed">
                提供稳健的放行测试方法，监控生产工艺变更对药物效力的影响。
              </p>
            </div>
          </div>
          {/* Changed bg-[#1C2C5E] to bg-[#4B827E] */}
          <div className="bg-[#4B827E] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
             <h4 className="text-xl font-bold mb-6 flex items-center">
               <svg className="w-6 h-6 mr-3 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
               为何选择 DiscoverX 开发 Bioassay？
             </h4>
             <ul className="space-y-4">
               {[
                 "深厚的细胞工程积淀，确保靶点表达的稳定性",
                 "专有的 EFC 技术，提供卓越的信噪比和灵敏度",
                 "丰富的各类靶点 (GPCR, RTK, Cytokine) 开发经验",
                 "全球领先的制药公司和 CRO 的认可底物"
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
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-16 text-center">Bioassay 开发与实施流程</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#4B827E]/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "可行性评估", desc: "确定最佳检测格式 (EFC, Reporter, etc.) 并初步测试试剂响应。" },
                { step: "02", title: "方法优化", desc: "调整细胞密度、温育时间及缓冲液体系，优化检测性能。" },
                { step: "03", title: "预验证 (Qualification)", desc: "评估方法的准确度、精密度、线性及特异性，确保其稳健性。" },
                { step: "04", title: "技术转移", desc: "交付完整的验证报告及操作手册，协助在接收实验室成功复现。" }
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
          <h2 className="text-3xl font-bold mb-6 text-white">加速您的生物药申报进程</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            立即联系我们的技术专家，讨论您的 Bioassay 开发需求，获取定制化的技术方案。
          </p>
          <button className="bg-white text-[#4B827E] px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
            开始项目咨询
          </button>
        </div>
      </section>
    </div>
  );
};

export default BioassayDev;
