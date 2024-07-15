import DiagramVHC1 from '@/assets/img/vcu_vhc_1stage.svg';
import DiagramVHC2 from '@/assets/img/vcu_vhc_2stage.svg';
import DiagramVHC3 from '@/assets/img/vcu_vhc_2stage_with_absorbtion.svg';
import DiagramVHC4 from '@/assets/img/vcu_vhc_regenerate.svg';
import DiagramVHC5 from '@/assets/img/vcu_vhc_chiller.svg';
import DiagramVHC6 from '@/assets/img/vcu_vhc_hybrid.svg';
import DiagramSTEAM1 from '@/assets/img/vcu_steam_3stage.svg';
import DiagramSTEAM2 from '@/assets/img/vcu_vhc_hybrid.svg';
import DiagramJC1 from '@/assets/img/jc_1stage.svg';
import DiagramJC2 from '@/assets/img/jc_ejector.svg';
import DiagramJAU1 from '@/assets/img/jau_benzine.svg';
import DiagramJAU2 from '@/assets/img/jau_oil.svg';

const allDiagrams = [
  [
    <DiagramVHC1 role="img" />,
    <DiagramVHC2 role="img" />,
    <DiagramVHC3 role="img" />,
    <DiagramVHC4 role="img" />,
    <DiagramVHC5 role="img" />,
    <DiagramVHC6 role="img" />,
  ],
  [<DiagramSTEAM1 role="img" />, <DiagramSTEAM2 role="img" />],
  [<DiagramJC1 role="img" />, <DiagramJC2 role="img" />],
  [<DiagramJAU1 role="img" />, <DiagramJAU2 role="img" />],
];

export default allDiagrams;
