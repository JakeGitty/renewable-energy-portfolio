'use client';
import { useState } from 'react';
// Import motion and AnimatePresence for animations
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
      conversion_process: "Organic matter is fed into an anaerobic digester, a sealed, oxygen-free tank. Microorganisms break down the biomass, releasing a mixture of gases, primarily methane ($CH_4$) and carbon dioxide ($CO_2$). This mixture is known as biogas.",
      output_utilization: "The raw biogas can be burned in a Combined Heat and Power (CHP) unit to generate both electricity and heat. Alternatively, it can be upgraded to biomethane (pure $CH_4$) and used as vehicle fuel or injected into the natural gas grid. The nutrient-rich byproduct, digestate, is used as an excellent organic fertilizer.",
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
      {/* SVG content... */}
    </svg>
  );
  const GeothermalDiagram = () => (
    <svg viewBox="0 0 1400 750" className="w-full bg-white rounded-md">
      {/* SVG content... */}
    </svg>
  );
  const BiomassDiagram = () => (
    <svg viewBox="0 0 1400 750" className="w-full bg-white rounded-md">
      {/* SVG content... */}
    </svg>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="border-b border-orange-500/20 bg-black/40 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-tight">
            Clean & Green Energy Portfolio
          </h1>
          <p className="text-gray-400 text-sm mt-1">Submitted by Jaykar Samuel Rajesh - RA2311003011579</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
      {/* === LAYOUT FIX: Changed from Grid to Flexbox === */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR */}
          {/* === LAYOUT FIX: Set explicit width for large screens === */}
          <div className="lg:w-1/4">
            <div className="space-y-3 sticky top-24">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">Activities</h3>
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => setActiveActivity(activity.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3
                    transition-all duration-300 ease-in-out transform
                    ${
                      activeActivity === activity.id
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:-translate-y-1 hover:scale-105'
                    }`}
                >
                  <span className="text-xl">{activity.icon}</span>
                  <span className="text-sm">{activity.title === "Home" ? "Home" : `Activity ${activity.id}`}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          {/* === LAYOUT FIX: Set to flex-1 to take remaining space === */}
          <div className="flex-1">
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
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 border border-orange-500/20 text-center space-y-6">
                    <h2 className="text-5xl font-extrabold text-white">Clean and Green Energy Portfolio</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded"></div>
                    <p className="text-xl text-gray-300">Submitted by Jaykar Samuel Rajesh</p>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">{current.content}</p>
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
         T                </div>
                    </motion.div>

                    {/* Diagram Section */}
                    <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                       <h3 className="text-lg font-bold text-orange-400 mb-4">System Architecture Diagram</h3>
                       {current.diagram === "wave" && <WaveDiagram />}
                       {current.diagram === "geothermal" && <GeothermalDiagram />}
                       {current.diagram === "biomass" && <BiomassDiagram />}
                    </motion.div>

                    {/* System Explanation */}
                      <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-3">System Explanation</h3>
                      <p className="text-gray-300 leading-relaxed text-justify">{current.explanation}</p>
                    </motion.div>
                        
                    {/* Energy Source */}
                    <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-3">⚡ Energy Source</h3>
                      <p className="text-gray-300 leading-relaxed">{current.energy_source}</p>
                    </motion.div>
                        
                    {/* Conversion Process */}
                    <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-3">🔄 Conversion Process</h3>
                      <p className="text-gray-300 leading-relaxed">{current.conversion_process}</p>
                    </motion.div>

                    {/* Output/Utilization */}
                    <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-3">💡 Output & Utilization</h3>
                      <p className="text-gray-300 leading-relaxed">{current.output_utilization}</p>
                    </motion.div>

                    {/* Real-world Application Relevance */}
                    <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-3">🌍 Real-world Application Relevance</h3>
                      <p className="text-gray-300 leading-relaxed">{current.relevance}</p>
                    </motion.div>

                    {/* Key Performance Metrics */}
                      <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur rounded-xl p-6 border border-orange-500/10 transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]">
                      <h3 className="text-lg font-bold text-orange-400 mb-4">Key Performance Metrics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {current.metrics?.map((metric, idx) => (
                          <div key={idx} className="bg-slate-800/70 p-4 rounded-lg text-center border border-slate-700 transition-transform duration-300 hover:-translate-y-1">
                            <p className="text-sm text-orange-400 font-semibold">{metric.label}</p>
                            <p className="text-xl font-bold text-white mt-1">{metric.value}</p>
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
    </div>
  );
};

export default Portfolio;