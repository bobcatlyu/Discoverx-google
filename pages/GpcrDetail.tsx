
import React, { useState } from 'react';

const GpcrDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const fullProductData = [
    // Page 5: Adenosine, Adrenoceptor, Angiotensin, Apelin, Bile Acid, Bombesin, Bradykinin, etc.
    { target: 'ACKR1', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADCYAP1R1 (PAC1)', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'ADGRA1 (GPR123)', family: 'Adhesion', moa: 'Orphan', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADGRB1 (BAI1)', family: 'Adhesion', moa: 'Orphan', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADGRB2 (BAI2)', family: 'Adhesion', moa: 'Orphan', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADGRB3 (BAI3)', family: 'Adhesion', moa: 'Orphan', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADGRG3 (GPR97)', family: 'Adhesion', moa: 'Orphan', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADORA1 (A1)', family: 'Adenosine', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADORA2A (A2A)', family: 'Adenosine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'ADORA2B (A2B)', family: 'Adenosine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADORA3 (A3)', family: 'Adenosine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA1A', family: 'Adrenoceptor', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA1B', family: 'Adrenoceptor', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA1D', family: 'Adrenoceptor', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA2A', family: 'Adrenoceptor', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA2B', family: 'Adrenoceptor', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA2C', family: 'Adrenoceptor', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRB1', family: 'Adrenoceptor', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRB2', family: 'Adrenoceptor', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'ADRB3', family: 'Adrenoceptor', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'AGTR1 (AT1)', family: 'Angiotensin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'AGTR2 (AT2)', family: 'Angiotensin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'AM2', family: 'Adrenomedullin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'Amylin (CALCR-RAMP3)', family: 'Amylin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'APJ (AGTRL1)', family: 'Apelin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'AVPR1A', family: 'Vasopressin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'AVPR1B', family: 'Vasopressin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'AVPR2', family: 'Vasopressin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'BDKRB1', family: 'Bradykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'BDKRB2', family: 'Bradykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'BRS3 (BB3)', family: 'Bombesin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'C3AR1 (C3a)', family: 'Complement', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'C5AR1 (C5a)', family: 'Complement', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },

    // Page 7: Cannabinoid, Chemokine, Cholecystokinin, etc.
    { target: 'CNR1 / CB1', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CNR2 / CB2', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CCR1', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR2', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CCR4', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR5', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR7', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR1 / IL8RA', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR2 / IL8RB', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR3', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR4', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CXCR7 / ACKR3', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCKAR / CCK1', family: 'Cholecystokinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'C5L2 (C5a2)', family: 'Complement', moa: 'Arrestin', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'Calcium', family: 'Calcium-sensing', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CALCR (No RAMP)', family: 'Calcitonin', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CALCRL-RAMP1 (CGRP)', family: 'Calcitonin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CALCR-RAMP1 (AMY1)', family: 'Amylin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CALCR-RAMP2 (AMY2)', family: 'Amylin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'cAMP', family: 'Detection', moa: 'Assay', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CASR (CaS)', family: 'Calcium-sensing', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'F2R (PAR1)', family: 'Proteinase-Activated', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'F2RL1 (PAR2)', family: 'Proteinase-Activated', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'F2RL3 (PAR4)', family: 'Proteinase-Activated', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'FFAR1 (GPR40)', family: 'Free Fatty Acid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'FFAR2 (GPR43)', family: 'Free Fatty Acid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'FFAR3 (GPR41)', family: 'Free Fatty Acid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'FPR1', family: 'Formylpeptide', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'FPR2 (FPRL1)', family: 'Formylpeptide', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'FPR3', family: 'Formylpeptide', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'FSHR', family: 'Glycoprotein', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
    { target: 'GABBR1-GABBR2', family: 'GABA', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GALR1', family: 'Galanin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'GALR2', family: 'Galanin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'GCGR (GCG)', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GHRHR (GHRFR)', family: 'GHRH', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GHSR (Ghrelin)', family: 'Ghrelin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GIPR (GIP)', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'GLP1R (GLP1)', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GLP2R (GLP2)', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GNRHR', family: 'GnRH', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GPBAR1 (GPCR19)', family: 'Bile Acid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR1', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR101', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR103 (QRFPR)', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR107', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR109A', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR109B', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR119', family: 'Lipid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR12', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR120', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR120 (L)', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR120 (S)', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR132', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR135', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR137 (TM7SF1)', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR139', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR141', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR142', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR143', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR146', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR148', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HCRTR1 (OX1)', family: 'Orexin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'HCRTR2 (OX2)', family: 'Orexin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'HRH1 (H1)', family: 'Histamine', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HRH2 (H2)', family: 'Histamine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HRH3 (H3)', family: 'Histamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HRH4 (H4)', family: 'Histamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HTR1A (5-HT1A)', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR1B (5-HT1B)', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HTR1E (5-HT1E)', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR1F (5-HT1F)', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR2A (5-HT2A)', family: 'Serotonin', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR2B (5-HT2B)', family: 'Serotonin', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR2C (5-HT2C)', family: 'Serotonin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'HTR4 (5-HT4)', family: 'Serotonin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HTR5A (5-HT5A)', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR6 (5-HT6)', family: 'Serotonin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HTR7 (5-HT7)', family: 'Serotonin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'KISS1R', family: 'Kisspeptin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'LGR4', family: 'Glycoprotein', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'LGR5', family: 'Glycoprotein', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'LGR6', family: 'Glycoprotein', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'LHCGR', family: 'Glycoprotein', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
    { target: 'LTB4R', family: 'Leukotriene', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'MC1R', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'MC2R (ACTH)', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'MC3R', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'MC4R', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'MC5R', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'MCHR1', family: 'MCH', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'MCHR2', family: 'MCH', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'MLNR (Motilin)', family: 'Motilin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'MRGPRD', family: 'Lipid', moa: 'Gi/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MRGPRE', family: 'Lipid', moa: 'Gi/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MRGPRF', family: 'Lipid', moa: 'Gi/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MRGPRX1', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MRGPRX2', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MRGPRX4', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'MTNR1A', family: 'Melatonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'MTNR1B', family: 'Melatonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'NMBR', family: 'Bombesin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'NMU1R', family: 'Neuromedin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },

    // Page 6: CCKAR, CCKBR, CCR, CXCR, etc.
    { target: 'CCKAR (CCK1)', family: 'Cholecystokinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCKBR (CCK2)', family: 'Cholecystokinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR1 (MIP-1a/RANTES-R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR10 (CCL27R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR2 (MIP-1R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CCR3', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR4', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR5 (MIP-1/RANTES-R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR6 (MIP-3α)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR7 (CCL19)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR8', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR9', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCRL1 (ACKR4)', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CCRL2', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CDC25A (MPIP1)', family: 'Cell Cycle', moa: 'Assay', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'CHRM1', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM2', family: 'Muscarinic', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM3', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM4', family: 'Muscarinic', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM5', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CMKLR1', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CNR1 (CB1)', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CNR2 (CB2)', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CRHR1', family: 'CRF', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CRHR2', family: 'CRF', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CRTH2 (PTGDR2, DP2)', family: 'Prostanoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CX3CR1 (Fractalkine)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR1 (IL8RA)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR2 (IL8RB)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR3 (IP-10R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR4 (SDF-1R)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CXCR5 (BLR1)', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR6', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR7 (ACKR3)', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CysLT1', family: 'Leukotriene', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CYSLTR2', family: 'Leukotriene', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'DRD1', family: 'Dopamine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'DRD2', family: 'Dopamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'DRD3', family: 'Dopamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'DRD4', family: 'Dopamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GPR149', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR15', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR150', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR151', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR152', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR157', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR161', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR162', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR17', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR171', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR173', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR176', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR18', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR182', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR183 (EBI2)', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR20', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR22', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR23', family: 'Lipid', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR25', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR26', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR27', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR3', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR30', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR31', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR32', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR34', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR35', family: 'Orphan', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'GPR37 (EDNRBL)', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR37L1', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR39', family: 'Orphan', moa: 'Gs/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR4', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR45', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR50', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR52', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR55', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR6', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR61', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR65', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR68 (OGR1)', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR75', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR78', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR79', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR81', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'NMU2R', family: 'Neuromedin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'NPBWR1 (GPR7)', family: 'Neuropeptide', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'NPBWR2 (GPR8)', family: 'Neuropeptide', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'NPFFR1', family: 'Neuropeptide', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'NPSR1b (NPSR1)', family: 'Neuropeptide', moa: 'Gs/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'NPY1R', family: 'Neuropeptide Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'NPY2R (PYY)', family: 'Neuropeptide Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'NPY4R (PPYR1)', family: 'Neuropeptide Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'NTSR1', family: 'Neurotensin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPN5 (Opsin)', family: 'Opsin', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'OPRD1 (Opioid δ)', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRK1 (Opioid κ)', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRL1 (Opioid)', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRM1 (Opioid µ)', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OXER1', family: 'Leukotriene', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'OXGR1 (GPR80, GPR99)', family: 'Orphan', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'OXTR', family: 'Vasopressin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'P2RY1', family: 'P2Y', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY11', family: 'P2Y', moa: 'Gs/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'P2RY12', family: 'P2Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'P2RY2', family: 'P2Y', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY4', family: 'P2Y', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY6', family: 'P2Y', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY8', family: 'P2Y', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PRLHR', family: 'Neuropeptide', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PROKR1', family: 'Neuropeptide', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PROKR2', family: 'Neuropeptide', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTAFR', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTGDR', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'PTGER1', family: 'Prostanoid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTGER2', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'PTGER3 (PGE2-R)', family: 'Prostanoid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTGER4', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'PTGFR', family: 'Prostanoid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTGIR', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'PTHR1', family: 'Parathyroid', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'PTHR2', family: 'Parathyroid', moa: 'Gs/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'RHO(P23H)', family: 'Opsin', moa: 'Assay', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'RXFP1 (LGR7)', family: 'Glycoprotein', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'RXFP2 (LGR8)', family: 'Glycoprotein', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'RXFP3 (SALPR)', family: 'Neuropeptide', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'RXFP4', family: 'Neuropeptide', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'SCTR', family: 'Secretin', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },

    // Page 7: DRD5, EDG, SSTR, TACR, etc.
    { target: 'DRD5', family: 'Dopamine', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'EDG1 (S1P1)', family: 'Lysophospholipid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'EDG2 (LPA1)', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'EDG3 (S1P3)', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'EDG4 (LPA2)', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'EDG5 (S1P2)', family: 'Lysophospholipid', moa: 'Gi/Gq/G12', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'EDG6 (S1P4)', family: 'Lysophospholipid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'EDG7 (LPA3)', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'EDG8 (S1P5)', family: 'Lysophospholipid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'EDNRA', family: 'Endothelin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'EDNRB', family: 'Endothelin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'VIPR1', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'VIPR2', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'XCR1', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'GPR83', family: 'Orphan', moa: 'Gi/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR84', family: 'Lipid', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR85', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR88', family: 'Orphan', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR91 (SUCNR1)', family: 'Lipid', moa: 'Gi/Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR92 (LPA5)', family: 'Lipid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM1 (mGlu1)', family: 'Glutamate', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM2 (mGlu2)', family: 'Glutamate', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM3 (mGlu3)', family: 'Glutamate', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM4 (mGlu4)', family: 'Glutamate', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM5 (mGlu5)', family: 'Glutamate', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRM6 (mGlu6)', family: 'Glutamate', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRPR (BB2)', family: 'Bombesin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'UTR2', family: 'Urotensin', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'SMO', family: 'Hedgehog', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'SSTR1', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'SSTR2', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'SSTR3', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'SSTR4', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'SSTR5', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'TAAR1', family: 'Trace Amine', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'TAAR5', family: 'Trace Amine', moa: 'Gs', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'TACR1', family: 'Tachykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'TACR2', family: 'Tachykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'TACR3', family: 'Tachykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'TBXA2R', family: 'Prostanoid', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'TRHR', family: 'Thyrotropin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'TSHR(L)', family: 'Glycoprotein', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
  ];

  const filteredData = fullProductData.filter(item => 
    item.target.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.moa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-2">GPCR 产品解决方案</h1>
            <h2 className="text-xl font-bold text-[#4B827E] mb-6">始终为您的目标受体找到合适的 GPCR 检测方案</h2>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                G 蛋白偶联受体（GPCR）是具有七次跨膜结构的受体家族，是目前已验证治疗靶点中规模最大的家族之一，已知人类 GPCR 超过 800 种。以 GPCR 为靶点的治疗药物约占当前上市药物的 40% 以上，这些药物可直接或间接作用于 GPCR。GPCR 的配体种类广泛，包括生长因子、离子、脂质、核苷酸、激素以及神经递质等。
              </p>
              <p>
                GPCR 在生理与病理过程中的作用极其广泛，从食欲调控、胚胎发育结构形成，到心血管疾病及罕见病等多种疾病过程均与其相关。为帮助研究人员全面解析特定 GPCR 及其受小分子或生物药调控的活性，Eurofins DiscoverX 提供多种生物学相关的细胞水平功能检测与结合检测、细胞系检测试剂盒、稳定细胞系、检测试剂盒及膜制备产品，支持探索多种可能的信号通路机制。
              </p>
              <p>
                Eurofins DiscoverX 产品组合中的靶点特异性产品具有高灵敏度、可扩展性和稳健性，可用于检测受体介导的第二信使信号（cAMP 与钙离子）、β-arrestin 招募、受体内吞以及配体结合等关键事件。这些检测同样支持对尚无已知内源性配体或获批药物的孤儿 GPCR 进行功能表征，构成其全面的 GPCR 解决方案体系。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-teal-50/30 rounded-[3rem] mb-16">
        <h3 className="text-2xl font-bold text-[#1C2C5E] mb-8 text-center">产品亮点</h3>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "覆盖广泛——覆盖超过 90% 的人类 GPCR 组（GPCRome）靶点，确保为您的目标受体提供检测方案",
            "高度适用——适用于小分子与生物药的开发流程，从靶点确认到临床前药物发现阶段",
            "多样检测选择——提供多种作用机制（MOA）类型检测（如 β-arrestin、cAMP、钙信号、内吞、配体结合、受体转运等），提供高度灵活的 GPCR 检测方案",
            "规模领先——超过 1,600 项经验证的功能与结合检测，已发表于 800 余篇同行评审文献，构成全面且可靠的 GPCR 检测体系"
          ].map((highlight, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 flex gap-4 items-center">
              <div className="shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">作用机制 MoA</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { 
                  id: "1", 
                  title: "cAMP 监测", 
                  desc: "直接定量监测 Gs 或 Gi 偶联受体引起的细胞内第二信使 cAMP 水平的变化。使用 HitHunter® 专有技术，提供极高灵敏度的均相化学发光检测，是小分子和生物药筛选的标准方法。" 
                },
                { 
                  id: "2", 
                  title: "Ca 离子动员", 
                  desc: "针对 Gq 偶联通路，利用高灵敏度荧光染料（如 Calcium No Wash 技术）实时监测受体激活激发的胞内钙库释放或胞外钙流入，完美适配 HTS 自动化流程。" 
                },
                { 
                  id: "3", 
                  title: "β-arrestin 招募", 
                  desc: "利用专有的 EFC 技术监测几乎所有 GPCR 激活后招募 β-arrestin 的物理过程。该方法不依赖 G 蛋白通路，是研究偏向性配体 (Biased Ligands) 和孤儿受体的核心工具。" 
                },
                { 
                  id: "4", 
                  title: "受体内吞 (Activated/Total)", 
                  desc: "定量追踪活化后的受体从细胞表面转移到胞内内体的过程。对于评估受体下调、ADC 药物内化效率及长效药效研究具有至关重要的参考价值。" 
                },
                { 
                  id: "5", 
                  title: "Pharmacotrafficking", 
                  desc: "监测蛋白质在胞内（如内质网）与细胞膜间的定向运输过程。常用于研究由于折叠错误导致的贩运缺陷，并筛选能够挽救功能的药理学伴侣 (Pharmacological Chaperones)。" 
                },
                { 
                  id: "6", 
                  title: "配体受体结合", 
                  desc: "利用高质量膜制品 (Membrane Preps) 进行放射性配体饱和结合或竞争性结合实验，直接测定药物与受体活性口袋的物理结合常数 (Kd/Ki) 及动力学特性。" 
                }
              ].map((item) => (
                <div key={item.id} className="p-10 hover:bg-slate-50 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-black group-hover:bg-[#4B827E] group-hover:text-white transition-colors">
                        {item.id}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#1C2C5E] mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section - Full Listing from PDF pages 6-11 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1C2C5E]">GPCR 产品组合 / Product Portfolio</h2>
            <p className="text-slate-500 mt-2">基于最新目录详尽更新，覆盖 290+ 靶点及主要产品类型（PDF 第 6-11 页）</p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="搜索靶点、系列或通路 (如 GLP1R)..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-[#4B827E] focus:border-transparent outline-none text-sm transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full overflow-x-auto shadow-2xl rounded-2xl border border-slate-200 max-h-[800px] overflow-y-auto">
            <table className="min-w-full divide-y divide-slate-200 border-separate border-spacing-0">
              <thead className="bg-[#4B827E] text-white sticky top-0 z-30">
                <tr>
                  <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E] whitespace-nowrap">靶点 / 基因 ID</th>
                  <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E] whitespace-nowrap">系列 / 家族</th>
                  <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E] whitespace-nowrap">主要作用机制</th>
                  <th colSpan={5} className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider border-b border-white/20 bg-[#4B827E] whitespace-nowrap">产品可用性</th>
                </tr>
                <tr className="bg-[#5a938f]">
                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">稳转细胞株</th>
                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">eXpress® Kit</th>
                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">Bioassay Kit</th>
                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">膜制品</th>
                  <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">转运/内吞</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 font-medium border-r border-slate-100 uppercase tracking-tight">{row.family}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 italic border-r border-slate-100">{row.moa}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.cellLine}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.express}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.bioassay}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.membrane}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold">{row.trans}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-6 py-20 text-center text-slate-400 italic">未找到匹配的靶点，请尝试搜索其他关键字。</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-slate-100 p-8 rounded-2xl border border-slate-200 gap-6">
          <div className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            <p className="mb-2"><strong>技术说明：</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>本表详尽列出了 PDF 目录第 6-11 页涵盖的 GPCR 靶点系列。</li>
              <li>"转运/内吞" 包括基于 EFC 技术的受体内吞 (Internalization) 和贩运 (Trafficking) 检测细胞系。</li>
              <li>"Bioassay Kit" 专门为治疗性抗体的效价评估 (Potency Assay) 和中和活性检测优化和预验证。</li>
            </ul>
          </div>
          <button className="whitespace-nowrap bg-[#1C2C5E] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2a3d7a] transition-all shadow-xl hover:-translate-y-1">
            索取 2026 版完整 PDF 目录
          </button>
        </div>
      </section>
    </div>
  );
};

export default GpcrDetail;
