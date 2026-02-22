
import React from 'react';

const TargetEngagementDetail: React.FC = () => {
  const epigeneticData = [
    { target: 'BAZ2A', cellLine: '796-0074C1', exp10: '-', exp2: '-' },
    { target: 'BRD2(1)', cellLine: '796-0004C1', exp10: '96-0004E1CP0L', exp2: '96-0004E1CP0M' },
    { target: 'BRD2(1,2)', cellLine: '796-0049C1', exp10: '-', exp2: '-' },
    { target: 'BRD3(1,2)', cellLine: '796-0036C1', exp10: '-', exp2: '-' },
    { target: 'BRD3(1,2)', cellLine: '796-0038C1', exp10: '96-0038E1CP7L', exp2: '96-0038E1CP7M' },
    { target: 'BRD4(1)', cellLine: '796-0005C1', exp10: '96-0005E1CP0L', exp2: '96-0005E1CP0M' },
    { target: 'BRDT(1)', cellLine: '796-0006C1', exp10: '-', exp2: '-' },
    { target: 'BRDT(1,2)', cellLine: '796-0046C1', exp10: '96-0046E1CP7L', exp2: '96-0046E1CP7M' },
    { target: 'EP300', cellLine: '796-0073C15', exp10: '-', exp2: '-' },
    { target: 'G9a', cellLine: '796-0003C15', exp10: '96-0003E15CP7L', exp2: '96-0003E15CP7M' },
    { target: 'GLP', cellLine: '796-0045C15', exp10: '96-0045E15CP7L', exp2: '96-0045E15CP7M' },
    { target: 'PRMT3', cellLine: '796-0072C15', exp10: '-', exp2: '-' },
    { target: 'SMARCA4', cellLine: '796-0060C1', exp10: '96-0060E1CP7L', exp2: '96-0060E1CP7M' },
    { target: 'TAF1L(2)', cellLine: '796-0058C1', exp10: '-', exp2: '-' },
  ];

  const kinaseData = [
    { target: 'BLK', cellLine: '796-0044C1', exp10: '96-0044E1CP0L', exp2: '96-0044E1CP0M' },
    { target: 'BTK', cellLine: '796-0056C15', exp10: '96-0056E15CP0L', exp2: '96-0056E15CP0M' },
    { target: 'CLK1', cellLine: '796-0059C1', exp10: '96-0059E1CP0L', exp2: '96-0059E1CP0M' },
    { target: 'CLK2', cellLine: '796-0057C15', exp10: '96-0057E15CP0L', exp2: '96-0057E15CP0M' },
    { target: 'CSF1R', cellLine: '796-0047C15', exp10: '96-0047E15CP0L', exp2: '96-0047E15CP0M' },
    { target: 'CSNK1D', cellLine: '796-0048C15', exp10: '96-0048E15CP0L', exp2: '96-0048E15CP0M' },
    { target: 'FGR', cellLine: '796-0043C1', exp10: '-', exp2: '-' },
    { target: 'HCK', cellLine: '796-0041C15', exp10: '96-0041E15CP0L', exp2: '96-0041E15CP0M' },
    { target: 'HPK1', cellLine: '796-0083C1', exp10: '-', exp2: '-' },
    { target: 'MEK1', cellLine: '796-0040C15', exp10: '96-0040E15CP0L', exp2: '96-0040E15CP0M' },
    { target: 'PI3K', cellLine: '796-0061C1', exp10: '-', exp2: '-' },
    { target: 'PIKFYVE', cellLine: '796-0078C1', exp10: '-', exp2: '-' },
    { target: 'PIM1', cellLine: '796-0052C15', exp10: '96-0052E15CP0L', exp2: '96-0052E15CP0M' },
    { target: 'PKCθ', cellLine: '796-0082C19', exp10: '-', exp2: '-' },
    { target: 'PYK2', cellLine: '796-0042C15', exp10: '96-0042E15CP0L', exp2: '96-0042E15CP0M' },
    { target: 'RIPK1', cellLine: '796-0076C19', exp10: '-', exp2: '-' },
    { target: 'RIPK2', cellLine: '796-0050C1', exp10: '96-0050E1CP0L', exp2: '96-0050E1CP0M' },
    { target: 'RIPK3', cellLine: '796-0077C19', exp10: '-', exp2: '-' },
    { target: 'SIK1', cellLine: '796-0051C15', exp10: '96-0051E15CP0L', exp2: '96-0051E15CP0M' },
    { target: 'ULK1', cellLine: '796-0081C1', exp10: '-', exp2: '-' },
  ];

  const otherData = [
    { target: 'Bcl2-Bax', cellLine: '796-0010C3', exp10: '-', exp2: '-' },
    { target: 'Bcl2-Bim', cellLine: '796-0008C3', exp10: '-', exp2: '-' },
    { target: 'Bcl2L1-Bax', cellLine: '796-0009C3', exp10: '96-0009E3CP16L', exp2: '96-0009E3CP16M' },
    { target: 'Bcl2L1-Bim', cellLine: '796-0037C3', exp10: '-', exp2: '-' },
    { target: 'MCL1-BIM', cellLine: '796-0075C3', exp10: '-', exp2: '-' },
  ];

  const reagentData = [
    { desc: 'InCELL检测试剂盒', cat: '96-0079', spec: '10-plate (1,000/4,000 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079S', spec: '2-plate (200/800 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079L', spec: '80-plate (8,000/32,000 dp)' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079-HTS480', spec: '480,000 dp' },
    { desc: 'InCELL检测试剂盒', cat: '96-0079-HTS960', spec: '960,000 dp' },
    { desc: 'InCELL Pulse 工具箱', cat: '94-4007S', spec: '4-plate (400/1,600 dp)' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200">靶点</th>
              <th colSpan={3} className="px-6 py-2 text-center text-xs font-bold uppercase tracking-wider border-b border-slate-200">产品类型及货号</th>
            </tr>
            <tr>
              <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-slate-200">Cell Line Assay Kit</th>
              <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-slate-200">eXpress® Kit (10-plate)</th>
              <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">eXpress® Kit (2-plate)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-mono text-slate-600 border-r border-slate-100">{row.cellLine}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-mono text-slate-600 border-r border-slate-100">{row.exp10}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-mono text-slate-600">{row.exp2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">靶标结合 (Target Engagement)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              在药物开发中，最关键的问题是：化合物是否真正进入了活细胞并与预期的蛋白靶标结合？
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Eurofins DiscoverX 的 **InCELL® 平台** 允许研究人员在生理相关的细胞环境中，直接测量小分子化合物与胞内蛋白的物理相互作用。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              这种方法能更准确地预测药物在体内的效力、选择性及脱靶风险，是连接体外生化实验与动物体内实验的重要桥梁。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/engagement_hero/800/600" 
              alt="Target Engagement Analysis" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">InCELL® 平台核心技术</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              <div className="p-10 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">01</div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold text-[#4B827E] mb-4">InCELL Hunter™ - 稳态占位分析</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      基于小分子结合诱导蛋白热稳定性改变的原理（CETSA 同类技术），结合 EFC 的高灵敏度检测。该方法无需细胞裂解，即可直接测定化合物对胞内全长蛋白或结构域的占位率 (Occupancy)。通过测量蛋白在配体结合后的降解速率差异，从而定量分析靶标结合强度。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">02</div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold text-[#4B827E] mb-4">InCELL Pulse™ - 动力学结合分析</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      专门用于测量药物与靶点结合的动力学特征（如 K_on 和 K_off）。通过在活细胞中实时追踪复合物的形成，提供比单一终点检测更深层次的药理学见解。其原理是在极短的时间窗口内，通过 EFC 信号的瞬时脉冲式响应，捕捉蛋白周转的细微变化。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Lists from Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">靶标结合产品列表 / Target Engagement Portfolio</h2>
        
        <ProductTable title="表观遗传蛋白 / Epigenetic Proteins" data={epigeneticData} />
        <ProductTable title="激酶靶点 / Kinase Targets" data={kinaseData} />
        <ProductTable title="其他蛋白 / Other Proteins" data={otherData} />

        {/* Reagents Table */}
        <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">试剂 / Reagents</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200">描述</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-slate-200">货号</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">规格</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {reagentData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.desc}</td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-600 border-r border-slate-100">{row.cat}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以利用 InCELL® 平台为您的特定兴趣蛋白定制开发靶标结合检测服务。
          </p>
        </div>
      </section>
    </div>
  );
};

export default TargetEngagementDetail;
