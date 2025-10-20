'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeActivity, setActiveActivity] = useState(0);

  const activities = [
    {
      id: 0,
      title: "Home",
      code: "HOME",
      icon: "🏠",
      isHome: true,
      content: "Climate change demands urgent action. This portfolio presents three critical renewable energy systems—wave energy for coastal desalination, geothermal power for baseload electricity, and biomass biogas conversion—designed to reduce our carbon footprint and dependence on fossil fuels. By exploring sustainable technologies, we can combat environmental degradation and create a cleaner, healthier planet for future generations. Every innovation counts in the fight against climate crisis."
    },
    {
      id: 1,
      title: "Wave Energy Conversion System for Coastal Desalination",
      code: "Q6",
      icon: "🌊",
      energy_source: "Kinetic energy from ocean waves at coastal regions (2-5m waves).",
      explanation: "This innovative system harnesses kinetic energy from ocean waves to power desalination processes for coastal communities. Wave capture devices absorb the mechanical motion of waves and convert it into hydraulic pressure. This hydraulic energy drives turbines connected to generators, producing electricity. The generated power then operates reverse osmosis membranes that separate fresh water from seawater through high-pressure filtration. The nutrient-rich brine byproduct is safely returned to the ocean, creating a sustainable cycle.",
      conversion_process: "1. Kinetic Capture: Devices like point absorber buoys or oscillating water columns move with the waves. 2. Hydraulic Conversion: This motion drives a hydraulic system, pressurizing a fluid. 3. Electricity Generation: The pressurized fluid spins a turbine, which is connected to a generator that produces electrical energy.",
      output_utilization: "The primary output is electricity, which directly powers the reverse osmosis (RO) plant. The main product is desalinated fresh water, suitable for drinking and agriculture. A secondary output is concentrated brine, which is carefully dispersed back into the ocean.",
      relevance: "Directly addresses water scarcity in coastal communities. It offers a sustainable alternative to fossil fuel-powered desalination, significantly reducing both the carbon footprint and the operational cost of freshwater production. It is highly relevant for arid regions like Australia, the Middle East, and California.",
      metrics: [
        { label: "Wave Power Density", value: "2-5 kW/m²" },
        { label: "System Efficiency", value: "30-45%" },
        { label: "Desalination Capacity", value: "1,000-5,000 m³/day" },
        { label: "Carbon Emissions", value: "Zero" }
      ],
      diagram: "wave"
    },
    {
      id: 2,
      title: "Geothermal Power Plant System for Electricity Generation",
      code: "Q7",
      icon: "🔥",
      energy_source: "Thermal energy from hot geothermal water or steam from underground wells (150-300°C).",
      explanation: "Geothermal power plants tap into Earth's internal heat to generate clean electricity with exceptional reliability. Hot water from geothermal wells at 150-300°C is brought to the surface and passed through heat exchangers that transfer thermal energy to a secondary fluid, which boils to create steam. This high-pressure steam drives turbine blades at high speeds, converting thermal energy into mechanical energy. The rotating turbine shaft connects to a generator that produces electricity through electromagnetic induction.",
      conversion_process: "In a binary cycle plant, the hot geothermal fluid is passed through a heat exchanger, transferring its heat to a secondary fluid (like isobutane) with a lower boiling point. This secondary fluid flashes into high-pressure vapor, which then expands to spin a turbine. The turbine drives a generator to produce electricity.",
      output_utilization: "The main output is consistent, baseload electricity supplied to the power grid 24/7. Waste heat from the process can also be utilized for district heating, warming greenhouses, or for industrial applications like food dehydration.",
      relevance: "As one of the most reliable renewable sources, geothermal provides crucial baseload power that stabilizes energy grids, complementing intermittent sources like solar and wind. It's vital for achieving a stable, 100% renewable energy mix. Leading countries include the USA, Iceland, and the Philippines.",
      metrics: [
        { label: "Temperature Range", value: "150-300°C" },
        { label: "Capacity Factor", value: "70-90%" },
        { label: "System Efficiency", value: "10-15%" },
        { label: "Baseload Power", value: "24/7" }
      ],
      diagram: "geothermal"
    },
    {
      id: 3,
      title: "Biomass-Based Biogas Generation System for a Dairy Farm",
      code: "Q5",
      icon: "🌱",
      energy_source: "Chemical energy stored in organic biomass (agricultural waste, animal manure, food scraps).",
      explanation: "This circular economy system converts agricultural and organic waste into renewable biogas energy while producing nutrient-rich fertilizer as a byproduct. Organic feedstock from dairy farms is collected and pre-treated through shredding and sorting to optimize decomposition. In sealed anaerobic digesters maintained at 35-37°C, specialized bacteria break down organic matter in oxygen-free conditions, producing biogas rich in methane (50-70%) and CO₂ (30-50%). The extracted biogas is purified and combusted in gas generators to produce electricity and heat.",
      conversion_process: "Organic matter is fed into an anaerobic digester, a sealed, oxygen-free tank. Microorganisms break down the biomass, releasing a mixture of gases, primarily methane and carbon dioxide. This mixture is known as biogas.",
      output_utilization: "The raw biogas can be burned in a Combined Heat and Power (CHP) unit to generate both electricity and heat. Alternatively, it can be upgraded to biomethane and used as vehicle fuel or injected into the natural gas grid. The nutrient-rich byproduct, digestate, is used as an excellent organic fertilizer.",
      relevance: "Creates a perfect circular economy for farms. It manages organic waste, drastically reduces methane emissions from manure (a potent greenhouse gas), generates a renewable energy source, and produces a valuable fertilizer, reducing reliance on synthetic alternatives. This model is crucial for sustainable agriculture and waste management globally.",
      metrics: [
        { label: "Biogas Yield", value: "0.2-0.3 m³/kg" },
        { label: "Methane Content", value: "50-70%" },
        { label: "Processing Time", value: "20-40 days" },
        { label: "System Efficiency", value: "75-85%" }
      ],
      diagram: "biomass"
    }
  ];

  const current = activities[activeActivity];

  const WaveDiagram = () => (
    <svg viewBox="0 0 1400 750" className="w-full bg-white rounded-md">
      <defs>
        <linearGradient id="wgrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#006994" stopOpacity="1" />
          <stop offset="100%" stopColor="#0099cc" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="wgrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00e6ff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="wgrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c00" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffa500" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="wgrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffed4e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="wgrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228b22" stopOpacity="1" />
          <stop offset="100%" stopColor="#32cd32" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="wgrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20b2aa" stopOpacity="1" />
          <stop offset="100%" stopColor="#48d1cc" stopOpacity="1" />
        </linearGradient>
        <filter id="wshadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
        <marker id="warrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#333"/>
        </marker>
      </defs>
      <text x="700" y="45" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#333">Wave Energy Conversion</text>
      <rect x="40" y="100" width="160" height="120" rx="10" fill="url(#wgrad1)" filter="url(#wshadow)"/>
      <text x="120" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Wave Energy</text>
      <text x="120" y="155" fontSize="10" textAnchor="middle" fill="white">2-5m waves</text>
      <path d="M 200 160 L 235 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#warrow)"/>
      <rect x="235" y="100" width="160" height="120" rx="10" fill="url(#wgrad2)" filter="url(#wshadow)"/>
      <text x="315" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#1a1a1a">Wave Capture</text>
      <text x="315" y="155" fontSize="10" textAnchor="middle" fill="#1a1a1a">Buoys/Floats</text>
      <path d="M 395 160 L 430 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#warrow)"/>
      <rect x="430" y="100" width="160" height="120" rx="10" fill="url(#wgrad3)" filter="url(#wshadow)"/>
      <text x="510" y="130" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Mechanical</text>
      <text x="510" y="147" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Conversion</text>
      <path d="M 590 160 L 625 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#warrow)"/>
      <rect x="625" y="100" width="160" height="120" rx="10" fill="url(#wgrad4)" filter="url(#wshadow)"/>
      <text x="705" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Generator</text>
      <text x="705" y="155" fontSize="10" textAnchor="middle" fill="#333">Electricity</text>
      <path d="M 785 160 L 820 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#warrow)"/>
      <rect x="820" y="100" width="160" height="120" rx="10" fill="url(#wgrad5)" filter="url(#wshadow)"/>
      <text x="900" y="130" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Reverse</text>
      <text x="900" y="147" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Osmosis</text>
      <path d="M 980 160 L 1015 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#warrow)"/>
      <rect x="1015" y="100" width="160" height="120" rx="10" fill="url(#wgrad6)" filter="url(#wshadow)"/>
      <text x="1095" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Fresh Water</text>
      <text x="1095" y="155" fontSize="10" textAnchor="middle" fill="white">Output</text>
      <path d="M 705 220 L 705 280 L 120 280 L 120 220" stroke="#8B4513" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#warrow)"/>
      <text x="410" y="300" fontSize="10" textAnchor="middle" fill="#8B4513" fontStyle="italic">Brine returned to ocean</text>
      <rect x="40" y="340" width="1320" height="370" rx="8" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
      <text x="700" y="365" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Process Summary</text>
      <text x="60" y="395" fontSize="11" fill="#333">Energy Conversion: Ocean waves energize buoys and floats positioned offshore. Mechanical motion transfers to hydraulic pumps, which drive turbines connected to generators, producing continuous electrical power from renewable wave motion with zero emissions.</text>
      <text x="60" y="425" fontSize="11" fill="#333">Desalination: Generated electricity powers reverse osmosis membranes that separate fresh water from seawater through high-pressure filtration. Fresh potable water is distributed to coastal communities, while concentrated brine is safely returned to the ocean.</text>
      <text x="60" y="460" fontSize="11" fontWeight="bold" fill="#333">Key Metrics:</text>
      <text x="60" y="480" fontSize="10" fill="#333">Wave Power Density: 2-5 kW/m² | System Efficiency: 30-45% | Desalination Capacity: 1,000-5,000 m³/day</text>
      <text x="60" y="500" fontSize="10" fill="#333">Environmental Impact: Sustainable | Carbon Footprint: Zero | Operating Cost: Low maintenance</text>
      <text x="700" y="700" fontSize="9" textAnchor="middle" fill="#666" fontStyle="italic">Wave energy + Desalination = Sustainable fresh water solution for coastal regions</text>
    </svg>
  );

  const GeothermalDiagram = () => (
    <svg viewBox="0 0 1400 750" className="w-full bg-white rounded-md">
      <defs>
        <linearGradient id="ggrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e90ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00bfff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ggrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c00" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffa500" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ggrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffed4e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ggrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b4513" stopOpacity="1" />
          <stop offset="100%" stopColor="#a0522d" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ggrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228b22" stopOpacity="1" />
          <stop offset="100%" stopColor="#32cd32" stopOpacity="1" />
        </linearGradient>
        <filter id="gshadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
        <marker id="garrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#333"/>
        </marker>
      </defs>
      <text x="700" y="45" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#333">Geothermal Power Plant System</text>
      <rect x="40" y="100" width="160" height="120" rx="10" fill="url(#ggrad1)" filter="url(#gshadow)"/>
      <text x="120" y="135" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Heat Source</text>
      <text x="120" y="153" fontSize="9" textAnchor="middle" fill="white">150-300°C</text>
      <path d="M 200 160 L 235 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#garrow)"/>
      <rect x="235" y="100" width="160" height="120" rx="10" fill="url(#ggrad2)" filter="url(#gshadow)"/>
      <text x="315" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Heat</text>
      <text x="315" y="155" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Exchanger</text>
      <path d="M 395 160 L 430 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#garrow)"/>
      <rect x="430" y="100" width="160" height="120" rx="10" fill="url(#ggrad3)" filter="url(#gshadow)"/>
      <text x="510" y="130" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#333">Steam</text>
      <text x="510" y="147" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#333">Generation</text>
      <path d="M 590 160 L 625 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#garrow)"/>
      <rect x="625" y="100" width="160" height="120" rx="10" fill="url(#ggrad2)" filter="url(#gshadow)"/>
      <text x="705" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Turbine</text>
      <text x="705" y="155" fontSize="10" textAnchor="middle" fill="white">Rotation</text>
      <path d="M 785 160 L 820 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#garrow)"/>
      <rect x="820" y="100" width="160" height="120" rx="10" fill="url(#ggrad4)" filter="url(#gshadow)"/>
      <text x="900" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Generator</text>
      <text x="900" y="155" fontSize="10" textAnchor="middle" fill="white">Induction</text>
      <path d="M 980 160 L 1015 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#garrow)"/>
      <rect x="1015" y="100" width="160" height="120" rx="10" fill="url(#ggrad5)" filter="url(#gshadow)"/>
      <text x="1095" y="135" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Power</text>
      <text x="1095" y="155" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">Output</text>
      <path d="M 705 220 L 705 280 L 120 280 L 120 220" stroke="#1e90ff" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#garrow)"/>
      <text x="410" y="300" fontSize="10" textAnchor="middle" fill="#1e90ff" fontStyle="italic">Cooled fluid recycled back to reservoir</text>
      <rect x="40" y="340" width="1320" height="370" rx="8" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
      <text x="700" y="365" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Process Summary</text>
      <text x="60" y="395" fontSize="11" fill="#333">Heat Extraction: Hot geothermal water from underground wells at 150-300°C is brought to the surface. Heat exchangers transfer thermal energy to a secondary fluid, which boils at high pressure to create steam. This process taps into Earth&apos;s renewable internal heat continuously.</text>
      <text x="60" y="425" fontSize="11" fill="#333">Power Generation: High-pressure steam drives turbine blades at high speeds, converting thermal energy into mechanical energy. The rotating turbine connects to a generator producing electricity through electromagnetic induction. Cooled fluid is recycled back, enabling continuous operation.</text>
      <text x="60" y="460" fontSize="11" fontWeight="bold" fill="#333">Key Metrics:</text>
      <text x="60" y="480" fontSize="10" fill="#333">Temperature Range: 150-300°C | Capacity Factor: 70-90% | System Efficiency: 10-15%</text>
      <text x="60" y="500" fontSize="10" fill="#333">24/7 Baseload Operation | Zero CO₂ emissions | Minimal Land Use | Highest reliability among renewables</text>
      <text x="700" y="700" fontSize="9" textAnchor="middle" fill="#666" fontStyle="italic">Geothermal heat → 24/7 clean electricity for reliable baseload power generation</text>
    </svg>
  );

  const BiomassDiagram = () => (
    <svg viewBox="0 0 1400 750" className="w-full bg-white rounded-md">
      <defs>
        <linearGradient id="bgrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b4513" stopOpacity="1" />
          <stop offset="100%" stopColor="#a0522d" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bgrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b7355" stopOpacity="1" />
          <stop offset="100%" stopColor="#a0826d" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bgrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8c00" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffa500" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bgrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffed4e" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bgrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32cd32" stopOpacity="1" />
          <stop offset="100%" stopColor="#00fa9a" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="bgrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228b22" stopOpacity="1" />
          <stop offset="100%" stopColor="#32cd32" stopOpacity="1" />
        </linearGradient>
        <filter id="bshadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
        <marker id="barrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#333"/>
        </marker>
      </defs>
      <text x="700" y="45" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#333">Biomass-Based Biogas Generation</text>
      <rect x="30" y="100" width="155" height="120" rx="10" fill="url(#bgrad1)" filter="url(#bshadow)"/>
      <text x="107" y="135" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Biomass</text>
      <text x="107" y="153" fontSize="9" textAnchor="middle" fill="white">Collection</text>
      <path d="M 185 160 L 217 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#barrow)"/>
      <rect x="217" y="100" width="155" height="120" rx="10" fill="url(#bgrad2)" filter="url(#bshadow)"/>
      <text x="295" y="135" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Pre-treatment</text>
      <text x="295" y="153" fontSize="9" textAnchor="middle" fill="white">Shredding</text>
      <path d="M 372 160 L 404 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#barrow)"/>
      <rect x="404" y="100" width="155" height="120" rx="10" fill="url(#bgrad3)" filter="url(#bshadow)"/>
      <text x="482" y="130" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Anaerobic</text>
      <text x="482" y="147" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Digestion</text>
      <path d="M 559 160 L 591 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#barrow)"/>
      <rect x="591" y="100" width="155" height="120" rx="10" fill="url(#bgrad4)" filter="url(#bshadow)"/>
      <text x="669" y="135" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#333">Biogas</text>
      <text x="669" y="153" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#333">Extraction</text>
      <path d="M 746 160 L 778 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#barrow)"/>
      <rect x="778" y="100" width="155" height="120" rx="10" fill="url(#bgrad5)" filter="url(#bshadow)"/>
      <text x="856" y="130" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Energy</text>
      <text x="856" y="147" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Generation</text>
      <path d="M 933 160 L 965 160" stroke="#333" strokeWidth="2" fill="none" markerEnd="url(#barrow)"/>
      <rect x="965" y="100" width="155" height="120" rx="10" fill="url(#bgrad6)" filter="url(#bshadow)"/>
      <text x="1043" y="135" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">Biofertilizer</text>
      <text x="1043" y="153" fontSize="9" textAnchor="middle" fill="white">Output</text>
      <path d="M 669 220 L 669 280 L 107 280 L 107 220" stroke="#228b22" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#barrow)"/>
      <text x="388" y="300" fontSize="10" textAnchor="middle" fill="#228b22" fontStyle="italic">Digestate (nutrient fertilizer) returned to agriculture</text>
      <rect x="40" y="340" width="1320" height="370" rx="8" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
      <text x="700" y="365" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Process Summary</text>
      <text x="60" y="395" fontSize="11" fill="#333">Collection & Digestion: Organic biomass (agricultural waste, manure, food scraps) is collected and pre-treated through shredding and sorting. In anaerobic digesters maintained at 35-37°C, bacteria decompose organic matter, producing biogas rich in methane (50-70%) and CO₂ (30-50%).</text>
      <text x="60" y="425" fontSize="11" fill="#333">Energy & Output: Extracted biogas is purified and combusted in generators to produce electricity and heat. The nutrient-rich digestate serves as biofertilizer, completing a circular economy cycle by returning nutrients to agricultural soil and reducing landfill waste by 80-90%.</text>
      <text x="60" y="460" fontSize="11" fontWeight="bold" fill="#333">Key Metrics:</text>
      <text x="60" y="480" fontSize="10" fill="#333">Biogas Yield: 0.2-0.3 m³/kg | Methane Content: 50-70% | System Efficiency: 75-85% | Processing Time: 20-40 days</text>
      <text x="60" y="500" fontSize="10" fill="#333">Waste Reduction: 80-90% | Zero Landfill Impact | Circular Economy | Applications: Electricity, heating, CBG fuel</text>
      <text x="700" y="700" fontSize="9" textAnchor="middle" fill="#666" fontStyle="italic">Biomass waste → Biogas energy + Biofertilizer → Reduced waste + Renewable energy + Improved soil health</text>
</svg>
);const cardVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } }
};
const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0 }
};
return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Radial gradient effect */}
      <div className="absolute inset-0 z-0 bg-radial-gradient"></div>

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex gap-6 px-6 py-8">
        {/* LEFT SIDEBAR - Always on left */}
        <div className="w-80 flex-shrink-0">
          <div className="space-y-3 sticky top-24">
            {/* Moved header content */}
            <div className="mb-6 px-4">
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-tight">
                Clean & Green Energy Activities
              </h1>
              <p className="text-gray-400 text-xs mt-1">Submitted by Jaykar Samuel Rajesh - RA2311003011579</p>
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">Activities</h3>
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveActivity(activity.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 transition-all duration-300 ease-in-out transform ${
                  activeActivity === activity.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white hover:-translate-y-1 hover:scale-105'
                }`}
              >
                <span className="text-xl">{activity.icon}</span>
                <span className="text-sm">{activity.title === "Home" ? "Home" : `Activity ${activity.id}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT AREA - Flexible */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={cardVariants}
              transition={{ duration: 0.4 }}
            >
              {current.isHome ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center space-y-6 relative">
                  {/* Frosted glass effect for the main card */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none"></div>
                  <h2 className="text-5xl font-extrabold text-white">Clean and Green Energy Portfolio</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded"></div>
                  <p className="text-xl text-gray-300">Submitted by Jaykar Samuel Rajesh</p>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">{current.content}</p>
                </div>
              ) : (
                <motion.div variants={cardVariants} className="space-y-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{current.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-orange-400">{current.code}</p>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">{current.title}</h2>
                      </div>
                    </div>
                  </motion.div>

                  {/* Diagram Section */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-4">System Architecture Diagram</h3>
                    {current.diagram === "wave" && <WaveDiagram />}
                    {current.diagram === "geothermal" && <GeothermalDiagram />}
                    {current.diagram === "biomass" && <BiomassDiagram />}
                  </motion.div>

                  {/* System Explanation */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">System Explanation</h3>
                    <p className="text-gray-300 leading-relaxed text-justify">{current.explanation}</p>
                  </motion.div>

                  {/* Energy Source */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">⚡ Energy Source</h3>
                    <p className="text-gray-300 leading-relaxed">{current.energy_source}</p>
                  </motion.div>

                  {/* Conversion Process */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">🔄 Conversion Process</h3>
                    <p className="text-gray-300 leading-relaxed">{current.conversion_process}</p>
                  </motion.div>

                  {/* Output/Utilization */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">💡 Output & Utilization</h3>
                    <p className="text-gray-300 leading-relaxed">{current.output_utilization}</p>
                  </motion.div>

                  {/* Real-world Application Relevance */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">🌍 Real-world Application Relevance</h3>
                    <p className="text-gray-300 leading-relaxed">{current.relevance}</p>
                  </motion.div>

                  {/* Key Performance Metrics - FIXED ALIGNMENT */}
                  <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                    <h3 className="text-lg font-bold text-orange-400 mb-4">Key Performance Metrics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center">
                      {current.metrics?.map((metric, idx) => (
                        <div key={idx} className="bg-slate-800/70 p-4 rounded-lg text-center border border-slate-700 transition-transform duration-300 hover:-translate-y-1">
                          <p className="text-sm text-orange-400 font-semibold">{metric.label}</p>
                          <p className="text-lg font-bold text-white mt-2 break-words">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </>);
};

export default Portfolio;