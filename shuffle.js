	var selectedOption = '';
	var gameMusic= new Audio("sound/shuffleaud.mp3");
	var startGm = new Audio("sound/gamestart.mp3");
var miss = new Audio("sound/miss.mp3");
var click = new Audio("sound/click.mp3");
var correct1 = new Audio("sound/correct1.mp3");
var correct2 = new Audio("sound/correct2.mp3");
var correct3 = new Audio("sound/correct3.mp3");
var timeover = new Audio("sound/timeover.mp3");
var secsHand = 0 , score = 0 ;
	var selectedInterestArray = [];
var soccer = ["soccer","goal","kick","referee","penalty","offside","cornerkick","football","foul","dribble","freekick"] ;
	var nof , tid , originalword , control ;
var politics = ["candidate","vote","senate","party","ballot box","manifesto","campaign","election","voters card","honorable","position","form"];
var education = ["Academy", "Attendance", "Blackboard", "Certificate", "Chapter", "Class", "Master" ,"Classmate","College","Correction", "Duster", "Elementary", "Examination", "Exercise", "Game","Handwriting", "Headmaster", "Headmistress", "Instrument", "Box", "Laboratory", "Language", "Leader", "Lecture", "Lesson", "Mark", "Medal", "Meeting", "Note", "Book", "Period", "Physical", "Education", "Prayer", "Hall", "Prize", "Professor", "Progress", "Report", "Promotion", "Punishment", "Ruler", "Scholar", "School", "Science", "Scout", "Section", "Seminar", "Shield", "Slate", "Social", "Squad", "Student", "Syllabus", "Teacher", "Timetable", "Tuition", "Tutor", "University"];

var medicine = ["abdominal", "abdominoplasty", "stomach", "abdominocentesis", "abdominous", "abduction", "aberrant", "abiogenesis", "acrocyanosis", "acrophobia", "acromegaly", "active", "energetic", "acute", "gastritis", "ingesting", "pyelonephritis", "bladder", "infection", "tendon", "tissue", "muscle", "bony","attachment","anesthesiology", "aneurysm", "cardiovascular", "artery", "angioplasty", "neurofibroma","fibrous", "peripheral", "angiology", "disorders", "Anodonta", "mussels",  "anopia", "sightlessness", "anorexia", "appetite", "antipyretic", "anuresis", "urinate", "anuria", "aphasia", "lesion", "aplasia", "apnea", "cessation", "breathing", "apneic", "sclerosis","arthritis", "arthroplasty", "asepsis", "asymptomatic", "atherosclerotic", "atherosclerosis", "atrophy", "benign", "disposition", "manner", "biopsy", "blepharitis", "blepharospasm", "blepharism", "bradycardia", "bronchiolitis", "bronchitis", "bronchopneumonia","bronchoscope", "bronchospasm", "asthma", "carcinogenic", "carcinoma", "cardiac", "arrest", "absence", "systole", "cardiology","cardiologist", "cardiomegaly", "carditis", "cauterization", "central", "cephalalgia", "cephalic","cephalometry", "cerebrospinal", "cerebrovascular", "cerebrum", "cheilitis", "cheiloschisis", "cheilosis", "chemotherapy", "cholecystectomy", "gall", "cholecystitis", "cholecalciferol", "chondrodystrophy", "chronic", "circumduction", "climacteric", "colic", "colitis", "celiocentesis", "rectum", "conception", "corneal", "coronary", "thrombosis", "craniotomy", "craniometer","uranoplasty", "cranium", "cryptorchidism", "cyanosis", "cystoparalysis", "cystoplegia", "cystitis", "cytoplast", "defibrillation", "dehiscence", "dental", "odontalgia","dermatitis", "dermatologist" ,"dermatome", "dermatosis", "diagnosis", "diagnostician", "diaphragm", "dilation", "diplococcus", "diplopia", "disease", "distal", "dorsally"];

 var biology = ["Absorption", "Achromatic", "Adaptation", "Aerobic", "Algae", "Alimentary", "Allergy", "Amoeba", "Amphibian", "Analogue", "Anatomy", "Ancestor", "Antibody", "Appendage", "Aquatic", "Arboreal", "Asexual", "Assimilation", "Atrophy", "Auditory", "Backbone", "Bacteria", "Balance", "Barrier", "Benign", "Biology", "Biome", "Bisect", "Botany", "Branch", "Breathe", "Carnivorous", "Catalyst", "Cavity", "Cell", "Chlorophyll", "Cholesterol", "Chromatic", "Chromosome", "Cilia", "Classification", "Cohesive", "Collagen", "Communicable", "Community", "Contraction", "Control", "Convolution", "Coronary", "Cyclic", "Darwin", "Deciduous", "Decomposition", "Dermis", "Develop", "Dichotomous", "Dietary", "Differentiation", "Diffusion", "Digestion", "Dinosaur", "Discipline", "Displacement", "Division", "Dominant", "Dormant", "Ecology", "Ecosystem", "Ectoplasm", "Edema", "Embryo", "Endangered", "Endemic", "Endoskeleton", "Endothermic", "Energy", "Environment", "Enzyme", "Epidermis", "Erosion", "Essential", "Estrogen", "Evolution", "Exoskeleton", "Exothermic", "Extermination", "Extinct", "Factor", "Feedback", "Fertilization", "Fetus", "Fibrillation", "Filament", "Fish", "Fission", "Flower", "Food", "Fossil",  "Gamete", "Gaseous", "Gastrin", "Genetics", "Genome", "Genus", "Germ", "Gestation", "Gills", "Grafting", "Greenhouse", "Absorption", "Achromatic", "Adaptation", "Aerobic", "Algae", "Alimentary", "Allergy", "Amoeba", "Amphibian", "Analogue", "Anatomy", "Ancestor", "Antibody", "Appendage", "Aquatic", "Arboreal", "Asexual", "Assimilation", "Atrophy", "Backbone", "Bacteria", "Balance", "Barrier", "Benign", "Biology", "Biome", "Bisect", "Botany", "Branch", "Breathe", "Carnivorous", "Catalyst", "Cavity", "Cell", "Chlorophyll", "Cholesterol", "Chromatic", "Chromosome", "Cilia", "Classification", "Cohesive", "Collagen", "Communicable", "Community", "Contraction", "Control", "Convolution", "Coronary", "Cyclic", "Darwin", "Deciduous", "Decomposition", "Dermis", "Develop", "Dichotomous", "Dietary", "Differentiation", "Diffusion", "Digestion", "Dinosaur", "Discipline", "Displacement", "Division", "Dominant", "Dormant", "Ecology", "Ecosystem", "Ectoplasm", "Edema", "Embryo", "Endangered", "Endemic", "Endoskeleton", "Endothermic", "Energy", "Environment", "Enzyme", "Epidermis", "Erosion", "Essential", "Estrogen", "Evolution", "Exoskeleton", "Exothermic", "Extermination", "Extinct", "Factor", "Feedback", "Fertilization", "Fetus", "Fibrillation", "Filament", "Fish", "Fission", "Flower", "Food", "Fossil", "Gamete", "Gaseous", "Gastrin", "Genetics", "Genome", "Genus", "Germ", "Gestation", "Gills", "Grafting", "Greenhouse"];

 var chemistry = ["Abiosis", "Acid", "Acidic", "Affect", "Alchemist", "Alkaline", "Allotrope", "Alteration", "Amphoteric", "Analysis", "Anomaly", "Antigen", "Apparatus", "Application", "Arrangement", "Astatine", "Atomic", "Atomic number", "Atrophy", "Azeotropic","Balance", "Base","Benzene", "Bonding", "Bromine", "Burning","Carbon", "Carcinogen", "Catalyst", "Cell", "Centigrade", "Chain", "Change", "Chemical bond","Chemistry", "Chlorine", "Colloid", "Combination", "Composition", "Compound", "Concentration", "Conclusion", "Consumption", "Crystal", "Current", "Data", "Decomposition", "Desalination", "Desiccant", "Determination", "Detritus", "Discovery", "Display", "Distillation", "Dopant", "Dynamics","Efflorescence", "Electrical", "Electrolysis", "Electron", "Elements", "Enzyme", "Equilibrium", "Ester", "Examination","Ferment", "Fission", "Fluid", "Fluorine", "Formula", "Fractionation", "Fuel", "cells","Gas","Halogen", "Heat", "Helium", "Hydrocarbon", "Hydrogen", "Hydrolysis", "Hydroxide", "Hypothesis","Impurity", "Inactive", "Inert", "Inhibitor", "Inorganic", "Inquiry", "Instruction", "Interaction", "Interactive", "Investigation", "Iodine", "Ion", "Ions", "Isomer", "Isotope","Kinetics","Laser", "Latent heat", "Light", "Lipid", "Liquid", "Litmus paper","Magnetic", "Matter", "Measure", "Melt", "Metals", "Microbe", "Mixture", "Molecule","Negative charge", "Neon", "Neutralize", "Neutrons", "Non-carbon", "Non-living", "Nonmetallic", "Nuclear", "Nucleus", "Number","Orbit", "Organic", "Osmosis", "Oxidation", "Oxygen","Particle", "Periodic table", "Pharmacology", "Phenomena", "Physical", "Pipette", "Pollution", "Polymer", "Positive Power", "Practical", "Process", "Properties", "Protein", "Protons", "Pure","Quantum", "Theory", "Quark","Radiation", "Radical", "Radioactivity", "Reaction", "Reagent", "Rectify", "Reduction", "Refine", "Release", "Revelation", "Revert","Salt", "Scientist", "Semiconductor", "Separation", "Soluble", "Solvent", "Speed", "Substance", "Suspension", "Symbiosis", "Symbol", "Syneresis", "Synergy", "Synthesis", "Synthesize", "Systematic","Table", "Temperature", "Titration", "Toxin", "Transformation", "Transition","Undissolved", "Unit", "Unreactive", "Uranium","Valency", "Validation", "Values", "Vapor", "Vary", "Versatile", "Viscosity","Wave particle", "Weight","Xenon","Zinc", "Zirconium", "Zymoscope"];

 var physics = ["Absolute zero", "Acceleration", "Accuracy", "Acoustics", "Action", "Adhesion", "Affect", "Amplitude", "Angular", "Antiproton", "Apparent", "Applied", "Apply", "Aptitude", "Aristotle", "Aspect", "Atmosphere", "Atom", "Atomic", "Attenuate", "Attraction", "Aviation", "Axis", "Balance", "Basic", "Bodies", "Boson", "Branch","Calculus", "Capacity", "Centrifugal", "Changes", "Chaos", "Charge", "Chemical", "Chromatics", "Circular", "Collide", "Component", "Compression", "Condensation", "Conductivity", "Conservation", "Constant", "Control", "Conversion", "Copernicus", "Cosmology", "Curie", "Damping", "Decibel", "Density", "Dependence", "Deposits", "Design", "Development", "Deviation", "Diode", "Direction", "Discipline", "Displacement", "Distance", "Distortion", "Disturbance", "Doctorate", "Drag", "Dynamics", "Effect", "Einstein", "Elasticity", "Electricity", "Electromagnetic", "Electron", "Electronics", "Emission", "Energy", "Engine", "Engineer", "Entropy", "Equation", "Equilibrium", "Equivalent", "Evaporation", "Expansion", "Experiment", "Explosion", "External", "Factor", "Fission", "Flight", "Flow", "Fluid", "Flying", "Focus", "Force", "Form", "Formula", "Frequency", "Friction", "Fulcrum", "Fundamental force", "Galileo", "Gas", "Generate", "Geophysics", "Gilbert", "Graph", "Gravitation", "Gravity", "Guide", "Gyroscope", "Half-life", "Harness", "Heat", "Hertz", "Hold", "Hydraulics", "Identical", "Impact", "Impulse", "Incandescent", "Inertia", "Influence", "Innovate", "Inquiry", "Interaction", "Intervening", "Invention", "Inverse", "Investigation", "Invisible", "Irradiate", "Isotope", "Joule", "Kaon", "Kinetics", "Laser", "Laws", "Level", "Lift", "Light", "Liquids", "Loft", "Lumen", "Machinery", "Magnet", "Magnetism", "Magnitude", "Mass", "Mathematics", "Matter", "Measure", "Mechanics", "Meteorology", "Metrics", "Modulate", "Molecule", "Motion", "Movement", "Navigation", "Negative", "Newton", "Nuclear", "Nucleus", "Objects", "Optics", "Oscillation", "Overload", "Parallax", "Parity", "Particle", "Performance", "Phenomenon", "Photon", "Physics", "Piston", "Pitch", "Plasma", "Position", "Prediction", "Pressure", "Principal", "Projectile", "Propagation", "Properties", "Proportion", "Psi", "Pulse", "Quality", "Quandary", "Quanta", "Quantitative", "Quantity", "Quantum", "jump", "leap", "Quark", "Radiation", "Radioactivity", "Reception", "Relationship", "Relative", "Relativity", "Repulsion", "Research", "Resistance", "Resolution", "Resonance", "Rest", "Reversal", "Robotic", "Rotation", "Saturation", "Scalar", "Science", "Scientific", "Seismology", "Semiconductor", "Shape", "Shift", "Sir Issac", "Solid", "Sonic", "Sound", "Space", "Spectrum", "Speed", "Standing", "Stationary", "Statistics", "Strain", "Stress", "Structure", "Study", "Sublimation", "Substance", "Surface", "Suspension", "Symmetry", "System", "Temperature", "Tensile", "Tension", "Theoretical", "Theory", "Thermal", "Thermodynamics", "Thrust", "Torque", "Training", "Trajectory", "Transformation", "Transistor", "Transition", "Trough", "Turning", "Ultrasonic", "Uncertainty", "Uniform", "Unify", "Unique", "Unit", "Universal", "University", "Vacuum", "Value", "Vapor", "Variable", "Variation", "Vector", "Velocity", "Viscosity", "Volatile", "Voltage", "Volume", "Wave", "Weight", "White noise", "X-ray", "Zone"];

 var geography = ["Abrasion", "Abundance", "Acre", "Adaptation", "Aeration", "Agriculture", "Alluvial", "Altitude", "Annual", "Anthropology", "Arable", "Archeology", "Archipelago", "Arid", "Atlas", "Atmosphere", "Atoll", "Australia", "Axis", "Azimuth", "Badlands", "Barren", "Barrier", "reef", "Basin", "Bayou", "Belt", "Belvedere", "Berm", "Bluff", "Bog", "Border", "Boundary", "Bowl", "Butte","Caldera", "Canal", "Canyon", "Cape", "Cardinal points", "Cartographer", "Cartography", "Cascade", "Cavern", "Cay", "Celestial", "Change", "Channel", "Chaparral", "Chasm", "Circulation", "Circumnavigate", "Civilization", "Classification", "Cliff", "Climate", "Clippings", "Cluster", "Coast", "Community", "Compass", "Compost", "Condensation", "Conditions", "Coniferous", "Conservation", "Continent", "Continental divide", "Contour", "Coordinate", "Copse", "Crag", "Crater", "Creek", "Crevasse", "Crevice", "Cuesta", "Cultivate", "Current", "Cuttings", "Cycles", "Dam", "Damage", "Deciduous", "Decomposition", "Decoration", "Decorative", "Dedication", "Degree", "Delicate", "Delta", "Depth", "Desert", "Destruction", "Develop", "Digging", "Disperse", "Distance", "Diversity", "Division", "Doldrums", "Domain", "Drainage", "Drought", "Dune", "Earth", "Earthquake", "Ecology", "Eddy", "Elements", "Elevation", "Eluvial", "Energy", "Environment", "Equator", "Equidistant", "Eradicate", "Erosion", "Escarpment", "Esker", "Espalier", "Estuary", "Eurasia", "Europe", "Evaporation", "Everglade", "Evidence", "Evolve", "Exfoliate", "Expanse", "Exposure", "Farming", "Fault", "Feature", "Fissure", "Fjord", "Flood plain", "Forest", "Fossil", "Frost", "Fuel", "Gap", "Geography", "Geyser", "Glacier", "Glade", "Glen", "Globe", "Gorge", "Grasslands", "Great Divide", "Greenland", "Greenwich", "Grid", "Grotto", "Grove", "Gulch", "Gulf", "Gully", "Guyot", "Habitat", "Harbor", "Hardy", "Harvest", "Headland", "Hedge", "Height", "Heirloom", "Heliotrope", "Hemisphere", "Highlands", "Hinterlands", "Horizon", "Iceberg", "Igneous rock", "Inlet", "Interconnection", "International Date Line", "Inundate", "Involve", "Irrigation", "Island", "Isobar", "Isotherm", "Isthmus", "Jet stream", "Jungle", "Key", "Kill", "Knoll", "Lagoon", "Land", "Land form", "Landmark", "Landscape", "Latitude", "Lava", "Legend", "Levee", "Littoral", "Location", "Longitude", "Lowlands", "Magnetic", "Mainland", "Map", "Marine", "Marsh", "Mass", "Massif", "Materials", "Meadow", "Meander", "Mercator projection", "Meridian", "Mesa", "Minute", "Moisture", "Monsoon", "Moor", "Morass", "Mountain", "Mulch", "Nadir", "Nation", "Natural", "North America", "Pole", "Northern Noticeable", "Oasis", "Ocean", "Oceania", "Ooze", "Original", "Overlook", "Ozone", "Palisade", "Pampas", "Parallel", "Pelagic", "Peninsula", "Permafrost", "Permeable", "Physical", "Piedmont", "Pinnacle", "Plains", "Plateau", "Polar", "Polder", "Pollutant", "Population", "Position", "Prairie", "Prime meridian", "Promontory", "Proof", "Province", "Quality", "Quantity", "Quest", "Questions", "Rain forest", "Rainfall", "Range", "Reef", "Region", "Scale", "Sea level", "Sediment", "Seismograph", "Site", "Situation", "Smog", "Society", "Steppe", "Strait", "Subtropical", "Swamp", "Tectonics", "Temperatures", "Territory", "Threat", "Tidal wave", "Topography", "Transportation", "Tributary", "Tropic", "Tundra", "Typhoon", "Unexpected", "Unique", "Universal", "Unusual", "Urban", "Value", "Variation", "Variety", "Various", "Vegetation", "Verdant", "Volcano", "Weather", "Weeds", "Wetlands", "Widespread", "Wilt", "Wither", "Woodlands", "Xeriscape", "Xylem", "Xyst", "Yard", "Yellow jacket", "Zone", "Zygophyte"];
 var law = ["contract","consideration","negligence","precedent","infringement","perjury","statute","sue","challenge","void","lewd","detention","parole","misdemeanour","injunction","summons", "writ", "frustration", "bar", "bench", "trespass", "interrogation", "apprehend","magistrate", "marshal", "embezzlement", "malpractice", "fugitive", "torture", "acquitted", "affidavit", "barrister", "solicitor", "chancellor", "equity", "piracy", "grill", "class", "action", "common-law", "marriage", "canon", "law", "boarding", "jurisprudence", "libel", "curfew", "espionage", "treason", "abduction", "autopsy", "impeachment", "collective", "bargaining", "verdict","legislation", "repudiate", "perpetrator", "offender", "culprit", "estoppel", "tenancy", "deed", "surety" ,"clause", "performance", "implied", "trust", "foreclosure", "bankruptcy", "roundup", "security", "interest", "juvenile", "delinquency", "expiration", "convict", "ordinance", "suspended", "sentence", "discovery", "felony", "adjudicate", "arraign", "bail", "assault", "dissent", "non", "compos", "mentis", "fiat", "evict", "aggravated", "refutation", "force", "majeure", "complaint"];
 var economics = ["Asset", "Turnover","Ratio","Bailout","Balance Of Payment","Bank Rate", "Base", "Brexit", "Broad","Money To Reserve","Call","Capacity", "Cost", "Capital","Account","Adequacy", "Market", "Casa", "Catch Up Effect", "Ceteris Paribus", "Clearing", "Price", "Consumer", "Index", "Contagion", "Contractionary", "Policy", "Core","Inflation","Benefit","Analysis","Push", "Countervailing","Duties","Credit","Default", "Swaps","Cross","Elasticity","Demand", "Crowding","Out","Currency", "Deposit", "Deadweight", "Loss", "Debt", "Equity","Deflation","Depreciation","Depression", "Dividend","Signaling","Domestic", "Institutional","Investo","Due Date", "Ease", "Doing", "Business","Exchange","Fair Trade","Fallout","Risk","Gross","Saving", "National Product","Human","Imperfect Competition","Indifference","Curve","Inferior","Goods", "Infrastructure","Investment","Banking", "Invisible","Hand","Labour","Law","Supply","Libor","Liquid","Asset","Liquidity","Trap","Macroeconomics","Marginal","Standing","Facility","Capitalization", "Mark","Mibor","Microeconomics","Monetary","Monopoly","Moral","Hazard","Efficiency", "Payments","Banks Percentage","Point", "Perfect","Phillips","Poverty","Preferences","Ceiling", "Floor","Mechanism","Principle", "Agent","Problem","Privatization","Producer","Production","Gap","Possibility","Profitability","Property","Tax","Proportional","Public","Distribution", "System","Purchasing","Power","Parity","Quantitative","Quantity","Demanded","Supplied","Theory","Rational","Behaviour","Rationing","Cycle","Economic","Growth"];
 // var animals = ["Aardvark", "Addax". "Adelie Penguin", "Afghan Hound", "African Civet", "Ainu Dog", "Ainu Dog", "Alligator", "American Bulldog", "AngelfisH", "Ant", "Anteater", "Antelope", "Appenzeller Dog", "Arctic Fox", "Arctic Hare", "Arctic Wolf", "Armadillo"]
 // var programming = []
	
	function countDown()
	{
			nof = 3 ; //this determines the number of minutes in our application 
			engine() ;		
	}
	function stopCountDown()
	{
		document.getElementById("control2").disabled  = true ;
		document.getElementById("control").value  = "Begin" ;
		nof = "" ;
		secsHand = 0 ;

	}
	function engine()
	{
		secsHand-- ;
		if(secsHand == -1)
		{
			secsHand = 59 ;
			nof-- ;
			if(nof == -1)
			{
				nof = 0 ;
				secsHand = 0 ;
				document.getElementById('displayTime').value = 0 + " : " + 0 ;
				control = false ;
				timeover.play();

				// alert("Your time is totally over and over and over, Game over") ;

				// return ;
				startOver();
			}
		}
		document.getElementById('displayTime').value = nof + " : " + secsHand ;
		tid = window.setTimeout("engine()",1000) ;
	}
	function shuffle(word)
	{
		originalword = word ;
		var wordArray = word.split("");
		var wordLength = word.length ;
		var shuffledWord = "" ;
		for (var i = 0; i < wordLength ; i++) 
		{
			var rand = Math.floor(Math.random() * wordLength)  ;
			//rand = 3
			//alert(rand + " " + i + " " + wordArray[rand]) ;
			if(wordArray[rand] != "")
			{
				shuffledWord += wordArray[rand] ;
				wordArray[rand] = "" ;
			}
			else
			{
				i-- ;
			}
		}
	document.getElementById("oword").value = shuffledWord ;
	}
	function begin()
	{
		//with the assumption math.random returns 5
		index = Math.floor(Math.random() * selectedInterestArray.length) ;
		shuffle(selectedInterestArray[index]) ;
		
		countDown() ;
		startGm.play();
		click.play();
	} 
	function computeAns()
	{
		click.play();		
		var x="";
	
		
		var ans = document.getElementById("sword").value ;

		if(ans == originalword)
		{
			correct1.play();
			score+=10;
			
			switch(score)
			{
				case 10:
				var b = "<div class='progress' style=width:100%'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='10' style='width:10px'>10% complete";
          	 b+= "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     		case 20:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-danger' role='progress-bar' aria-valuenow='20' style='width:20px'>20% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 30:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='30' style='width:30px'>30% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 40:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='40' style='width:40px'>40% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 50:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='50' style='width:50px'>50% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 60:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='60' style='width:60px'> 60% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 70:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='70' style='width:70px'>70% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 80:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='80' style='width:80px'> 80% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	case 90:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='90' style='width:90px'> 90% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
     	
    	case 100:
     		var b = "<div class='progress'>";	
          b += "<div class='progress-bar progress-bar-info' role='progress-bar' aria-valuenow='100' style='width:100px'>100% complete";
          	 b += "<div>" ;   
        b += "</div>" ;
        //alert(a) ;
     	document.getElementById("check").innerHTML = b;
     	break;
			}
		}
		else
		{
			miss.play();
			alert("Wrong Answer, the correct answer is " + originalword ) ;
		}
		document.getElementById("sword").value = "" ;
		if(selectedInterestArray.length == 0)
		{
			control = false ;
			if (score>=50) 
			{
				correct3.play(); alert("Your score is "+score);
				startOver();
			}
			else
			{
				alert("Your score is "+score); timeover.play();
				// alert("The game is over") ;
				// return ;
				startOver();
			}
			
		}
		index = Math.floor(Math.random() * selectedInterestArray.length) ;
		shuffle(selectedInterestArray[index]) ;
		selectedInterestArray.splice(index,1) ;
		sword.focus();

	}


	function startOver() {
		click.play();
	location.reload();

  }
	function disp()
	{  
		var d=$("#v").val();

		var selectedOption = f1.interest.value;

		if(selectedOption == 'soccer')
			{
				selectedInterestArray = soccer;
			}
		else if(selectedOption == 'politics')
			{
				selectedInterestArray = politics;
			}
		else if(selectedOption == 'education')
			{
				selectedInterestArray = education;
			}
		else if(selectedOption == 'medicine')
			{
				selectedInterestArray = medicine;
			}
		else if(selectedOption == 'biology')
			{
				selectedInterestArray = biology;
			}
		else if(selectedOption == 'chemistry')
			{
				selectedInterestArray = chemistry;
			}
		else if(selectedOption == 'physics')
			{
				selectedInterestArray = physics;
			}
		else if(selectedOption == 'geography')
			{
				selectedInterestArray = geography;
			}
		else if(selectedOption == 'law')
			{
				selectedInterestArray = law;
			}	
		else if(selectedOption == 'economics')
			{
				selectedInterestArray = economics;
			}		
	if(d!="")
	{
		$("#ro").slideToggle();
		$("#col").hide();
		$("strong").html(d);
		begin();
		sword.focus();
	}
		else{
			alert("Enter your name first");}
		click.play();

	}
