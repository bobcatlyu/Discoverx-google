
import React from 'react';

const ReagentsDetail: React.FC = () => {
  // Page 1 & 2: Cell Culture Reagents
  const cellCultureReagents = [
    { usage: '细胞培养Cell Culture Kits', cat: '92-3101G', desc: 'AssayComplete Cell Culture Kit-101', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3102G', desc: 'AssayComplete Cell Culture Kit-102', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3103G', desc: 'AssayComplete Cell Culture Kit-103', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3105G', desc: 'AssayComplete Cell Culture Kit-105', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3107G', desc: 'AssayComplete Cell Culture Kit-107', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3108G', desc: 'AssayComplete Cell Culture Kit-108', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3109G', desc: 'AssayComplete Cell Culture Kit-109', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3110G', desc: 'AssayComplete Cell Culture Kit-110', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3111G', desc: 'AssayComplete Cell Culture Kit-111', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3112G', desc: 'AssayComplete Cell Culture Kit-112', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3113G', desc: 'AssayComplete Cell Culture Kit-113', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3114G', desc: 'AssayComplete Cell Culture Kit-114', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3115G', desc: 'AssayComplete Cell Culture Kit-115', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3116G', desc: 'AssayComplete Cell Culture Kit-116', specs: 'Kit' },
    { usage: '细胞培养Cell Culture Kits', cat: '92-3117G', desc: 'AssayComplete Cell Culture Kit-117', specs: 'Kit' },
    { usage: '细胞消化Cell Detachment', cat: '92-0009', desc: 'AssayComplete Cell Detachment Reagent', specs: '50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5101FR', desc: 'AssayComplete Freezing Reagent F1', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5102FR', desc: 'AssayComplete Freezing Reagent F2', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5103FR', desc: 'AssayComplete Freezing Reagent F3', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5104FR', desc: 'AssayComplete Freezing Reagent F4', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5105FR', desc: 'AssayComplete Freezing Reagent F5', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5106FR', desc: 'AssayComplete Freezing Reagent F6', specs: '2 x 50 mL' },
    { usage: '细胞冻存Cell Freezing', cat: '92-5107FR', desc: 'AssayComplete Freezing Reagent F7', specs: '2 x 50 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4101TR', desc: 'AssayComplete Thawing Reagent T1', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4102TR', desc: 'AssayComplete Thawing Reagent T2', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4103TR', desc: 'AssayComplete Thawing Reagent T3', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4104TR', desc: 'AssayComplete Thawing Reagent T4', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4105TR', desc: 'AssayComplete Thawing Reagent T5', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4106TR', desc: 'AssayComplete Thawing Reagent T6', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4108TR', desc: 'AssayComplete Thawing Reagent T8', specs: '100 mL' },
    { usage: '细胞解冻Cell Thawing', cat: '92-4110TR', desc: 'AssayComplete Thawing Reagent T10', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R0A', desc: 'AssayComplete Cell Plating 0 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R0B', desc: 'AssayComplete Cell Plating 0 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R10A', desc: 'AssayComplete Cell Plating 10 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R10B', desc: 'AssayComplete Cell Plating 10 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R11A', desc: 'AssayComplete Cell Plating 11 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R11B', desc: 'AssayComplete Cell Plating 11 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R13A', desc: 'AssayComplete Cell Plating 13 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R13B', desc: 'AssayComplete Cell Plating 13 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R14A', desc: 'AssayComplete Cell Plating 14 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R14B', desc: 'AssayComplete Cell Plating 14 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R15A', desc: 'AssayComplete Cell Plating 15 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R15B', desc: 'AssayComplete Cell Plating 15 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R16A', desc: 'AssayComplete Cell Plating 16 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R16B', desc: 'AssayComplete Cell Plating 16 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R17A', desc: 'AssayComplete Cell Plating 17 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R17B', desc: 'AssayComplete Cell Plating 17 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R18A', desc: 'AssayComplete Cell Plating 18 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R18B', desc: 'AssayComplete Cell Plating 18 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R19A', desc: 'AssayComplete Cell Plating 19 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R19B', desc: 'AssayComplete Cell Plating 19 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R1A', desc: 'AssayComplete Cell Plating 1 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R1B', desc: 'AssayComplete Cell Plating 1 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R20A', desc: 'AssayComplete Cell Plating 20 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R20B', desc: 'AssayComplete Cell Plating 20 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R21A', desc: 'AssayComplete Cell Plating 21 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R21B', desc: 'AssayComplete Cell Plating 21 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R22A', desc: 'AssayComplete Cell Plating 22 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R22B', desc: 'AssayComplete Cell Plating 22 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R23A', desc: 'AssayComplete Cell Plating 23 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R23B', desc: 'AssayComplete Cell Plating 23 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R24A', desc: 'AssayComplete Cell Plating 24 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R24B', desc: 'AssayComplete Cell Plating 24 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R25A', desc: 'AssayComplete Cell Plating 25 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R25B', desc: 'AssayComplete Cell Plating 25 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R26A', desc: 'AssayComplete Cell Plating 26 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R26B', desc: 'AssayComplete Cell Plating 26 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R27A', desc: 'AssayComplete Cell Plating 27 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R27B', desc: 'AssayComplete Cell Plating 27 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R28A', desc: 'AssayComplete Cell Plating 28 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R28B', desc: 'AssayComplete Cell Plating 28 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R29A', desc: 'AssayComplete Cell Plating 29 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R29B', desc: 'AssayComplete Cell Plating 29 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R2A', desc: 'AssayComplete Cell Plating 2 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R2B', desc: 'AssayComplete Cell Plating 2 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R30A', desc: 'AssayComplete Cell Plating 30 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R30B', desc: 'AssayComplete Cell Plating 30 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R32A', desc: 'AssayComplete Cell Plating 32 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R32B', desc: 'AssayComplete Cell Plating 32 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R36A', desc: 'AssayComplete Cell Plating 36 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R36B', desc: 'AssayComplete Cell Plating 36 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R38A', desc: 'AssayComplete Cell Plating 38 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R38B', desc: 'AssayComplete Cell Plating 38 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R39A', desc: 'AssayComplete Cell Plating 39 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R39B', desc: 'AssayComplete Cell Plating 39 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R3A', desc: 'AssayComplete Cell Plating 3 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R3B', desc: 'AssayComplete Cell Plating 3 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R43A', desc: 'AssayComplete Cell Plating 43 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R4A', desc: 'AssayComplete Cell Plating 4 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R4B', desc: 'AssayComplete Cell Plating 4 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R5A', desc: 'AssayComplete Cell Plating 5 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R5B', desc: 'AssayComplete Cell Plating 5 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R6A', desc: 'AssayComplete Cell Plating 6 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R6B', desc: 'AssayComplete Cell Plating 6 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R7A', desc: 'AssayComplete Cell Plating 7 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R7B', desc: 'AssayComplete Cell Plating 7 Reagent', specs: '500 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R9A', desc: 'AssayComplete Cell Plating 9 Reagent', specs: '100 mL' },
    { usage: '细胞铺板Cell Plating', cat: '93-0563R9B', desc: 'AssayComplete Cell Plating 9 Reagent', specs: '500 mL' },
  ];

  // Page 2 & 3: Starter Packs
  const starterPacks = [
    { usage: 'Checkpoint Clustering', cat: '493-1133C3', desc: 'U2OS FcyRIIb Clustering Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Clustering', cat: '493-1138C3', desc: 'U2OS FcγR1a Clustering Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Clustering', cat: '493-1139C3', desc: 'U2OS mFCGR2B Clustering Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Clustering', cat: '493-1140C3', desc: 'U2OS FcγRIIa Clustering Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Clustering', cat: '493-1184C3', desc: 'FcgRIIIa Clustering Cell Line (U2OS) Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1066C3', desc: 'U2OS PD-L1 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1076C3', desc: 'U2OS PD-L2 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1093C3', desc: 'U2OS CD86 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1137C3', desc: 'U2OS CD200 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1149C19', desc: 'Jurkat CD47-Presenting Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1159C3', desc: 'U2OS mPD-L1 Ligand Cell Line Starter Pack', specs: 'Pack' },
    { usage: 'Checkpoint Ligand', cat: '493-1162C3', desc: 'U2OS mCD80 Ligand Cell Line Starter Pack', specs: 'Pack' },
  ];

  // Page 3, 4 & 5: Control Ligands
  const controlLigands = [
    { usage: 'Control Ligands', cat: '90-0099', desc: 'ATP Gold', specs: '7 mg' },
    { usage: 'Control Ligands', cat: '92-0005', desc: 'Forskolin', specs: '2 x 0.25 mg' },
    { usage: 'Control Ligands', cat: '92-0007', desc: 'Ultrapure IBMX', specs: '55.55 mg' },
    { usage: 'Control Ligands', cat: '92-1001', desc: 'Recombinant Human CCL2', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1009', desc: 'Recombinant Human CXCL8', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1010', desc: 'Recombinant Human CXCL11', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1011', desc: 'Recombinant Human CXCL12 / SDF-1α', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1012', desc: 'Recombinant Human CXCL13', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1023', desc: 'Recombinant Human b-NGF', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1024', desc: 'Recombinant Human BDNF', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1025', desc: 'Recombinant Human NT3', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1030', desc: 'Recombinant Human IGF-I', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1031', desc: 'Recombinant Human Heregulin β1', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1041', desc: '1-oleoyl-LPA', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1048', desc: 'Zaprinast', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1050', desc: 'Adrenomedullin', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1052', desc: 'Beta-CGRP', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1053', desc: 'Bradykinin', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1054', desc: 'Calcitonin, human', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1056', desc: 'Dynorphin A', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1060', desc: 'Oxytocin', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1061', desc: 'PACAP (1-27)', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1063', desc: 'Peptide YY, Human', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1064', desc: 'Prolactin Releasing Peptide (1-31)', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1065', desc: 'Sauvagine', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1068', desc: 'Somatostatin-28', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1071', desc: 'TIP-39', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1074', desc: 'VIP', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1075', desc: 'WKYMVm-NH2', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1076', desc: 'Cortistatin 14, Human', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1078', desc: 'GIP (Gastric Inhibitory Peptide)', specs: '500 µg' },
    { usage: 'Control Ligands', cat: '92-1079', desc: 'GLP II (1-33) (Glucagon-like peptide)', specs: '500 µg' },
    { usage: 'Control Ligands', cat: '92-1082', desc: 'PTH(1-34)', specs: '500 µg' },
    { usage: 'Control Ligands', cat: '92-1085', desc: '[Lys-des-arg9]-Bradykinin', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1086', desc: 'Met 5-Enkephalin', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1087', desc: 'Glucagon', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1088', desc: 'Insulin', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1090', desc: 'Bovine Type II Collagen, Immunization Grade', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1091', desc: 'Recombinant Human Neuregulin-1 (Heregulin β2)', specs: '50 µg' },
    { usage: 'Control Ligands', cat: '92-1093', desc: 'Apelin-13 TFA salt', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1094', desc: 'U-18666A', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1095', desc: 'Wortmannin', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1097', desc: 'Recombinant Human TNF alpha', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1103', desc: 'Recombinant Human Complement C5a', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1107', desc: 'Galanin', specs: '0.1 mg' },
    { usage: 'Control Ligands', cat: '92-1108', desc: 'Serotonin 5-HT', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1110', desc: 'Recombinant Human PDGF-BB', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1111', desc: 'TSH, Thyroid stimulating hormone', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1112', desc: 'Luteinizing Hormone', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1113', desc: 'Recombinant human EGF', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1114', desc: 'Recombinant Human SCF', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1115', desc: 'Exendin-4', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1118', desc: 'Sphingosine 1-phosphate', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1119', desc: 'Isoproterenol', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1120', desc: 'LPI (soy), L-a-Lysophosphatidylinositol', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1132', desc: 'Dexamethasone', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1144', desc: 'Prolactin', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1148', desc: 'Thapsigargin', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1154', desc: 'Prostaglandin E2', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1156', desc: 'UK 14,304', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1160', desc: 'Prostaglandin D2', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1161', desc: 'Dopamine', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1166', desc: 'FSH', specs: '0.32 mg' },
    { usage: 'Control Ligands', cat: '92-1169', desc: 'Histamine', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1172', desc: 'αMSH', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1173', desc: 'MCH(6-17)', specs: '500 μg' },
    { usage: 'Control Ligands', cat: '92-1176', desc: 'ATP', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1187', desc: 'C3a Receptor Agonist', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1194', desc: 'QRFP-26/P518', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1196', desc: 'TGR5 Receptor Agonist', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1202', desc: 'Embelin', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1203', desc: 'Recombinant Human Relaxin-2', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1214', desc: '2-Methylthio-ATP', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1215', desc: 'BAM (8-22)', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1222', desc: 'Recombinant Human TGF-β1 (HEK 293 derived)', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1223', desc: 'Tyramine', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1224', desc: 'Erythropoietin human', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1227', desc: 'β-Alanine', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1229', desc: 'Recombinant Human IL-17 (IL-17A)', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1233', desc: 'Neuromedin B', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1237', desc: 'Cyclohexamide', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1238', desc: 'Foretinib (GSK1363089)', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1239', desc: 'Bromosporine', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1248', desc: 'VX-809 (Lumacaftor)', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1250', desc: 'Recombinant Human IL-3', specs: '2 µg' },
    { usage: 'Control Ligands', cat: '92-1251', desc: 'Recombinant Human IL-5', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1252', desc: 'Recombinant Human IL-10', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1253', desc: 'Recombinant Human IL-2', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1254', desc: 'Recombinant Human IL-4', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1256', desc: 'Recombinant Human IL-13', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1259', desc: 'Recombinant Human IL-17F', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1261', desc: 'Recombinant Human IL-31', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1265', desc: 'Recombinant Human IL-15', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1266', desc: 'Recombinant Human IL-23', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1267', desc: 'Recombinant Human BMP-4', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1268', desc: 'Recombinant Human GDF - 11', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1272', desc: 'Recombinant Human IL-11', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1274', desc: 'Recombinant Human IL-26', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1275', desc: 'Recombinant Human IL-33', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1276', desc: 'Recombinant Human TSLP', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1278', desc: 'THIQ', specs: '1 mg' },
    { usage: 'Control Ligands', cat: '92-1280', desc: '9-cis-Retinal', specs: '25 mg' },
    { usage: 'Control Ligands', cat: '92-1281', desc: 'Recombinant Human VEGF165', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1282', desc: 'Recombinant Human soluble RANK ligand', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1285', desc: 'Recombinant Human IL-6', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1286', desc: 'Recombinant Human IL-12 (p70)', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1287', desc: 'Recombinant Human IL-21', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1288', desc: 'Recombinant Human IL-24', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1290', desc: 'Anti-PD1 Antibody [NAT105]', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1292', desc: 'Recombinant Human IL-18', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1293', desc: 'Recombinant Human Angiopoietin-2', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1295', desc: 'Recombinant Human M-CSF', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1296', desc: 'Recombinant Human IL-1β', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1301', desc: 'Recombinant Human FGF-19', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1302', desc: 'Clofilium', specs: '10 mg' },
    { usage: 'Control Ligands', cat: '92-1312', desc: 'Recombinant Human OX40L', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1314', desc: 'Recombinant Human Activin A', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1317', desc: 'Recombinant Human GM-CSF', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1318', desc: 'Recombinant Human FGF-18', specs: '50 µg' },
    { usage: 'Control Ligands', cat: '92-1319', desc: 'Anti-CTLA4 Antibody [14D3]', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1321', desc: 'Recombinant Human 4-1BB-L', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1323', desc: 'Recombinant Human IFN-gamma', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1325', desc: 'TH588', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1326', desc: 'Recombinant Human Gas6', specs: '50 µg' },
    { usage: 'Control Ligands', cat: '92-1330', desc: 'Recombinant Human FGF-23', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1331', desc: 'Recombinant Human IL-2, Cell Culture Grade', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1332', desc: 'Anti-BTLA Antibody [6F4]', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1333', desc: 'Recombinant Human IL-27', specs: '10 µg' },
    { usage: 'Control Ligands', cat: '92-1338', desc: 'Recombinant Human Growth Hormone', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1341', desc: 'Anti-CD47 antibody', specs: '100 µL' },
    { usage: 'Control Ligands', cat: '92-1342', desc: 'Anti-CD200R antibody', specs: '100 µL' },
    { usage: 'Control Ligands', cat: '92-1343', desc: 'CP 55,940', specs: '5 mg' },
    { usage: 'Control Ligands', cat: '92-1345', desc: 'Ghrelin', specs: '0.5 mg' },
    { usage: 'Control Ligands', cat: '92-1346', desc: 'Recombinant Human Artemin', specs: '5 µg' },
    { usage: 'Control Ligands', cat: '92-1348', desc: 'Recombinant Human CD40L', specs: '20 µg' },
    { usage: 'Control Ligands', cat: '92-1353', desc: 'Anti-mPD-L1 Monoclonal Antibody', specs: '100 µg' },
    { usage: 'Control Ligands', cat: '92-1355', desc: 'Anti-CD33 Monoclonal Antibody', specs: '25 µg' },
    { usage: 'Control Ligands', cat: '92-1359', desc: 'Anti-ErbB2 Monoclonal Antibody (trastuzumab)', specs: '200 µg' },
  ];

  // Page 5: Others
  const otherItems = [
    { usage: 'Plates', cat: '92-0013', desc: '384-well Clear bottom TC Treated, Sterile WCB, FB w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0015', desc: '384-well White bottom TC Treated, Sterile w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0014', desc: '96-well Clear bottom TC Treated, Sterile WCB, FB w/ LID', specs: '10 plates/pk' },
    { usage: 'Plates', cat: '92-0027', desc: '96-well White bottom TC Treated, Sterile w/LID', specs: '10 plates/pk' },
    { usage: 'PCR Plates', cat: '92-0011', desc: 'Green V-Bottom PP Ligand Dilution Plates', specs: '10 plates/pk' },
    { usage: 'PCR Plates', cat: '92-0031', desc: '96-well Black Low Profile, Skirted PCR Plates', specs: '10 plates/pk' },
    { usage: '抗生素', cat: '92-0028', desc: 'AssayComplete Puromycin', specs: '1 mL' },
    { usage: '抗生素', cat: '92-0029', desc: 'AssayComplete Hygromycin B', specs: '20 mL' },
    { usage: '抗生素', cat: '92-0030', desc: 'AssayComplete G418', specs: '20 mL' },
    { usage: '抗体', cat: '93-0246', desc: 'PathHunter Anti-EA Antibody', specs: '50 μg' },
    { usage: '抗体', cat: '93-0246L', desc: 'PathHunter Anti-EA Antibody', specs: '100 µg' },
    { usage: '抗体', cat: '92-0010', desc: 'PathHunter Anti-PL/PK Antibody', specs: '50 μg' },
    { usage: 'Dilution buffer', cat: '92-0023L', desc: 'AssayComplete Protein Dilution Buffer', specs: '2 x 250 mL' },
    { usage: 'Dilution buffer', cat: '92-0023M', desc: 'AssayComplete Protein Dilution Buffer', specs: '2 x 50 mL' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="overflow-x-auto max-h-[600px]">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">分类 (Usage)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">货号 (Cat No.)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">描述 (Description)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">规格 (Specs)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-600 font-medium">{row.usage}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-[#1C2C5E]">{row.cat}</td>
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
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">试剂耗材 / Reagents & Consumables</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Eurofins DiscoverX 提供一系列优化的细胞培养试剂、启动包及实验耗材，旨在确保您的功能检测获得最佳的稳定性、灵敏度和一致性。
        </p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6 mx-auto md:mx-0"></div>
      </div>

      <div className="space-y-4">
        <ProductTable title="细胞培养及处理试剂 (Cell Culture & Prep Reagents)" data={cellCultureReagents} />
        <ProductTable title="启动包 (Starter Packs)" data={starterPacks} />
        <ProductTable title="对照配体 (Control Ligands)" data={controlLigands} />
        <ProductTable title="其他耗材、抗体及缓冲液 (Others)" data={otherItems} />
      </div>

      <div className="mt-12 bg-slate-100 rounded-xl p-8 border border-slate-200">
        <h4 className="text-[#1C2C5E] font-bold text-lg mb-4">技术服务支持</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          以上列表包含 Eurofins DiscoverX 的核心试剂产品系列。所有试剂均经过严格的批次验证，确保与我们的 PathHunter® 和 HitHunter® 技术平台完全兼容。如果您需要大包装报价或定制规格，请通过“联系我们”页面与销售团队沟通。
        </p>
      </div>
    </div>
  );
};

export default ReagentsDetail;
