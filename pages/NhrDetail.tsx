
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const NHR_HEADERS = ['细胞株', 'eXpress® kit', 'Bioassay kit'];

const NhrDetail: React.FC = () => {
  const intro = [
    "核激素受体 (Nuclear Hormone Receptors, NHR) 是一类配体激活的转录因子，在生理发育、代谢稳态和细胞分化中起着核心调节作用。它们能够响应各种疏水性分子，如类固醇激素、甲状腺激素、维生素 D 以及各种代谢中间产物。",
    "NHR 是极具吸引力的药物开发靶点，涵盖了乳腺癌、前列腺癌、糖尿病、炎症及心血管疾病等广泛领域。DiscoverX 提供了多种基于细胞的功能性检测方案，用于评估激动剂和拮抗剂对受体激活、核转运及共调节因子招募的影响。"
  ];
  const moas: MoaItem[] = [
    { 
      title: "核易位 (Nuclear Translocation)", 
      description: "核受体通常在细胞质 (Cytoplasm) 中与伴侣蛋白结合。当化合物 (Compound) 结合后，诱导融合了 ED 标签的 NHR 构象变化并向细胞核 (Nucleus) 易位。在核内，NHR-ED 与定位于核内的 EA 标签 (NUC-EA Format) 发生酶片段互补 (EFC)，形成完整的 β-Gal 酶，随后水解底物 (β-Gal Substrate) 产生化学发光信号 (Light Signal)。这一过程可高度灵敏地定量化合物对 NHR 激活诱导的核转运效能。",
      imageUrl: "https://picsum.photos/seed/nhr_nuclear_translocation_efc/800/600"
    },
    { 
      title: "蛋白间相互作用 (Protein Interaction)", 
      description: "利用酶片段互补 (EFC) 技术，直接监测受体激活后与核心共调节因子（Co-activators 或 Co-repressors）之间的物理相互作用。这种方法具有极高的灵敏度和特异性，是研究核受体药理活性及偏向性调节的首选方法。" 
    }
  ];
  const data: ProductRow[] = [
    { target: 'AR', moa: 'Nuclear Translocation', statuses: ['✓', '-', '-'] },
    { target: 'AR', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'ARH', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'ERα', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'FXR', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'GR', moa: 'Nuclear Translocation', statuses: ['✓', '-', '-'] },
    { target: 'GR', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'LXRα / LXRβ', moa: 'Nuclear Translocation', statuses: ['✓', '-', '-'] },
    { target: 'LXRα / LXRβ', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'LXRβ-NCoR1', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'MR', moa: 'Nuclear Translocation', statuses: ['✓', '-', '-'] },
    { target: 'MR', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'PPARα / PPARγ / PPARδ', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'PRα / PRβ', moa: 'Nuclear Translocation', statuses: ['✓', '-', '-'] },
    { target: 'PRα / PRβ', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'RARα / RARβ', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'RXRα / RXRy', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] },
    { target: 'THRα / THRβ', moa: 'Protein Interaction', statuses: ['✓', '-', '-'] }
  ];
  return <TargetDetailTemplate title="核激素受体 NHR" introText={intro} introImageUrl="https://picsum.photos/seed/nhr_structure/800/600" moaItems={moas} productData={data} productTableTitle="核受体 (NHR) 产品列表" customTypeHeaders={NHR_HEADERS} />;
};

export default NhrDetail;
