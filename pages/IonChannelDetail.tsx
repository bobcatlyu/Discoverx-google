
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const IonChannelDetail: React.FC = () => {
  const intro = [
    "离子通道是位于细胞膜上的孔道蛋白，负责控制离子（如钠、钾、钙、氯）的跨膜流动。它们对于神经肌肉兴奋性、心脏搏动和电信号传导至关重要。",
    "离子通道仍然是多种适应症的重要治疗靶点，包括心律失常、高血压、局部麻醉、疼痛、中风、癫痫、抑郁症、双相情感障碍、囊性纤维化、心脏病、慢性阻塞性肺疾病 (COPD)、自身免疫性疾病和糖尿病。它们是开发针对罕见通道病疗法的极具吸引力的靶点，因为许多此类疾病是由单个基因突变引起的。离子通道不仅构成了一类重要的药物靶点，而且对于评估药物安全性也至关重要，包括作为美国 FDA 要求对任何针对人类疾病的药物进行安全性测试的一部分。",
    "Eurofins DiscoverX 提供一整套离子通道相关的研究工具，涵盖了从传统的稳定细胞株（Cell Line）到即用型（Ready-to-Assay）细胞以及膜制品（Membrane Prep）。",
    "用于靶点发现、命中筛选、先导化合物优化和安全性研究的高质量 PrecisION™ 产品",
    "• 经过验证 – 功能 and 药理学验证的离子通道细胞系，广泛用于内部 and 客户现场的药物发现 and 安全性项目，许多细胞系已使用超过十年",
    "• 卓越性能 – 专利细胞系载体技术，可实现最佳稳定性、表达 and 均匀电流",
    "• 用途广泛 – 适用于手动 and 自动膜片钳研究、药理伴侣发现 and 安全性结合研究",
    "• 即用型 (RTA) 细胞 – 只需解冻并使用冷冻细胞即可进行快速电生理评估，无需进行细胞培养"
  ];
  const moas: MoaItem[] = [
    { 
      title: "电生理检测 (Electrophysiological)", 
      description: "作为离子通道研究的金标准，通过监测离子通过通道产生的电流，直接评估药物对通道开启、关闭或失活状态的影响。DiscoverX 细胞株针对自动膜片钳 (APC) 平台进行了优化。" 
    },
    { 
      title: "转运/贩运 (Pharmacotrafficking)", 
      description: "监测错配或突变的离子通道蛋白（如 CFTR-ΔF508）从内质网向细胞膜的定向转运。这对于筛选能够拯救功能缺陷蛋白的小分子伴侣（Pharmacological Chaperones）具有重大意义。" 
    },
    { 
      title: "配体结合 (Binding)", 
      description: "利用标记配体直接测定药物与离子通道特定结合位点的亲和力。适用于膜制品 (Membrane Prep) 形式，支持高通量的竞争性结合实验。" 
    }
  ];

  const data: ProductRow[] = [
    { target: 'ASIC3', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Cav1.2 α1C/β2a/α2/δ1', moa: 'Electrophysiological', statuses: ['✓', '✓', '-'] },
    { target: 'Cav2.2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Cav3.2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'CFTR', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α1/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α2/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α3/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α4/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α5/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GABAA α6/β3/γ2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GluR6', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'GlyRA1', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'HCN1/2/3/4', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'hERG', moa: 'Electrophysiological', statuses: ['✓', '✓', '-'] },
    { target: 'hERG', moa: 'Pharmacotrafficking', statuses: ['✓', '-', '-'] },
    { target: 'hERG', moa: 'Binding', statuses: ['✓', '-', '-'] },
    { target: 'CFTR-ΔF508', moa: 'Pharmacotrafficking', statuses: ['✓', '-', '-'] },
    { target: 'KCNH2(G601S)', moa: 'Pharmacotrafficking', statuses: ['✓', '-', '-'] },
    { target: 'KCNQ1/hminK', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kir2.1', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kir6.2/SUR2A', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv1.1', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv1.1', moa: 'Binding', statuses: ['-', '-', '✓'] },
    { target: 'Kv1.2/1.3/1.4/1.5/1.6/1.7/1.8', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv12.2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv2.1 / Kv2.1/Kv9.2', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv3.1/3.2/3.3', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv4.2/KChIP2 / Kv4.3/KChIP1', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Kv7.2/Kv7.3', moa: 'Electrophysiological', statuses: ['✓', '✓', '-'] },
    { target: 'Kv7.3/Kv7.5 / Kv7.4 / Kv7.4/Kv7.5', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'nACh α7/ric3', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'nAChR α1/β1/δ/ε', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'nAChR α3/β4', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'nAChR α3/β4', moa: 'Binding', statuses: ['-', '-', '✓'] },
    { target: 'nAChR α4/β2', moa: 'Electrophysiological', statuses: ['✓', '✓', '-'] },
    { target: 'nAChR α7/ric3', moa: 'Electrophysiological', statuses: ['✓', '✓', '-'] },
    { target: 'Nav1.1 to Nav1.8', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'Nav1.8/β1', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] },
    { target: 'TRPA1 / TRPM8 / TRPV1 / TRPV3 / TRPV4', moa: 'Electrophysiological', statuses: ['✓', '-', '-'] }
  ];

  return (
    <TargetDetailTemplate 
      title="离子通道 Ion Channels" 
      introText={intro} 
      introImageUrl="https://picsum.photos/seed/ion_channel_banner/800/600" 
      moaItems={moas} 
      productData={data} 
      productTableTitle="离子通道产品列表 (Ion Channel Portfolio)" 
      customTypeHeaders={['Cell Line', 'Ready-to-Assay cells', 'Membrane Prep']}
    />
  );
};

export default IonChannelDetail;
