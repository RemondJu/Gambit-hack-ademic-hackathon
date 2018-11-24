-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Sam 24 Novembre 2018 à 20:34
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Gastronomie'),
(2, 'Écologie'),
(3, 'Technologie'),
(4, 'DIY'),
(5, 'Culture');

-- --------------------------------------------------------

--
-- Structure de la table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(7) NOT NULL,
  `image` varchar(255) NOT NULL,
  `goal` int(11) NOT NULL,
  `balance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `category_id`, `image`, `goal`, `balance`) VALUES
(11, 'Ocean Plastics Daypack by Solgaard: The Upcycled Backpack', 'A backpack made from recycled plastic recovered from the ocean. Designed for everyday carry, including laptop and other tech gear.\r\n\r\nIntroducing Daypack: an everyday backpack that\'s ready for all of your tech essentials, and before it gets to you you\'ve pulled 5lbs of trash from the ocean.\r\n\r\nWe owe all of our success to passionate backers like you, that believe in our products as much as we do. By backing this project - you not only support cleaning of the oceans, but you also receive an incredible bag. \r\n\r\nHelp us bring these amazing products to reality by backing us with one of the pledges below. All bags include a free stainless steel straw. ', 2, 'https://ksr-ugc.imgix.net/assets/022/976/092/252f79e72bb9e62459d45b99ecf9467f_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1540166654&auto=format&gif-q=50&q=92&s=f425f2078bcebcf9c9c047b2066ece6e', 22046, 92120),
(12, 'Black Light: Expedition to the Heart of Climate Change', 'Commission a multi-media installation by Michel Comte in the Arctic and build a new platform for environmental projects in the arts.\r\n\r\nBlack Light launches a large scale light installation in the arctic by Michel Comte with a call-out to all sailors to join the monumental live event with a global climate vigil. \r\nWavelength Foundation builds a new platform to support, produce, research and fund environmental projects in arts and culture. \r\nJoin us for a wake-up call to the global arts and culture communities to face up to the challenges from climate change.\r\n\r\nWhy is this important?\r\nTime and apathy are the biggest challenges we are facing in the race against climate change. Arts and culture possess an unique power to inspire and to shake up, to share ideas and to unite in a common cause. Visual arts and culture are powerful tools to convey inconvenient truths: one of them is that we have not even begun to grasp the dimensions of the damage humans have made due to excess carbon output and greenhouse gases emission, and of the consequences that are to haunt generations to come.', 2, 'https://ksr-ugc.imgix.net/assets/023/011/543/d32260807310952df2c2e2c82f4b3e85_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1540389588&auto=format&gif-q=50&q=92&s=a9621f0eb530190217340376128a8cae', 40000, 2318),
(13, 'TiKA - your modular design kit', 'TiKA is a new modular design kit that will revolutionize\r\n playing, learning, designing and prototyping.\r\n\r\nFirst and foremost, TiKA is a modular creation kit suited to build an unlimited number of amazing structures, such as lamps, holders for your plants or just jaw-dropping design objects for your apartment, office or anything in between. \r\n\r\nTiKA\'s modular system opens a world of possibilities through its five different sized wooden building sticks and small magnetic metal balls that act as connectors with flexible joints. You can also choose from 3 different, but connectable, bases to build upon.\r\n\r\nWith TiKA, the possibilities are endless when it comes to what you can create. Just look at some of these awesome designs.\r\n\r\nWe believe in TiKA\'s potential and in the people that admire and fund projects like ours. We also believe in the values of the Kickstarter community and supporters like you. \r\nIf you back us we will be able to fund the mass production of TiKA\'s. Every dollar counts towards helping TiKA become a reality! ', 4, 'https://ksr-ugc.imgix.net/assets/023/370/414/ca85f550fc2a8406eb762067c0872cea_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1543051521&auto=format&gif-q=50&q=92&s=4e441c49b28abb2cd03e4ff5e3aa10ef', 20000, 9678),
(14, '3-D PRINTER USING RECYCLED PLASTICS', 'This Kickstarter campaign works in conjunction with ‘Sculpted’ design 3D printing service who became the first dedicated printer to use recycled plastic (how cool, right?!?!). I won\'t bore you with the technical details, but basically these guys are geniuses who are saving our plastic- wasting-asses. The small island of Ha’apai hopes to install a small-scale recycling machine to combat waste. The funds received from this project will go towards building the first ever 3-D printer for Ha\'apai!! Sculpted will design a specific  3-D printer to combat the most common high-yielding throw away plastics (e.g. plastic bottles, plastic bags and single use containers) into re-usable materials. \r\n\r\nCurrently, there is no waste management infrastructure in Ha’apai, and plastics often get thrown in the sea or burned. Sadly, in Tonga most of the coral reefs have died due to pollution and coral bleaching. However, Ha\'apai has the one of the only living coral reefs in Tonga, and we want to keep it alive!!  ', 3, 'https://ksr-ugc.imgix.net/assets/023/032/222/0fb103b6971400024c78427f0434efe7_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1540527024&auto=format&gif-q=50&q=92&s=6a6f09181325552339aa22ec903815a2', 617, 737),
(15, 'Blackbeard cookware set: chef-grade, nonstick and nonscratch', 'A new hack. A complete cookware set of the chef’s essentials. Based on our crowd’s wishes. For a fair price.\r\n\r\nThe Blackbeard Armada Cookware set is based upon this summer’s biggest food success on Kickstarter: the Blackbeard frying pan. We never imagined our initial goal of €50.000 would turn into €332.437 so fast: more than 3,400 backers from across the seven seas helped us bring the Blackbeard to life. Wow, thank you so much! \r\n\r\nDuring our Blackbeard campaign, more than 800 backers provided us with feedback: they wanted more! In the spirit of the holidays, we created the Blackbeard Armada: a tribute to our backers and to the success of the Blackbeard. We invite everyone to join this campaign!\r\n', 1, 'https://ksr-ugc.imgix.net/assets/023/186/391/11312f509e7cf8f54f6ea84cc5d2f735_original.png?ixlib=rb-1.1.0&w=680&fit=max&v=1541666425&auto=format&gif-q=50&lossless=true&s=4b4d5e7d23baf57a3904f314acd02b07', 40000, 143046),
(16, 'Natural Milk Chews: tastes like candy, performs like a bar.', 'Healthy, snack-able candy exists! Subtly sweet with more than 10 essential vitamins, 4g protein per serving, and just 6 ingredients.\r\n\r\nThe name Numa comes from the Chinese characters for daughter (nu / 女儿) and mother (ma / 妈) as our snacks are rooted in the mother’s kitchen. Our all-natural milk chews are not too sweet, milky treats with benefits inspired by a traditional treat my mother grew up eating and made for the modern, health-conscious, sweet lover.\r\n\r\nWhy Kickstarter?\r\n\r\nWe, a “nu” and “ma” duo, started making milk chews by hand in our own kitchen in 2017 and launched our Original flavor to select NYC stores, our online store and Amazon in early 2018. Now armed with a highly improved recipe based on early launch feedback and MUCH more confidence in our production capabilities, we’re coming to Kickstarter to launch two new flavors! The funds from Kickstarter will help us source the packaging needed to make our new flavors a reality.', 1, 'https://ksr-ugc.imgix.net/assets/022/835/639/b0261179bd6abb6f879400a26851cedf_original.png?ixlib=rb-1.1.0&w=680&fit=max&v=1539110138&auto=format&gif-q=50&lossless=true&s=010d15630637c9db37d8b5c27bb7114f', 2204, 10846),
(17, 'HUMANITY\'S BEST FRIEND - The American Service Dog', 'Loyal, patient, strong, talented, and cuddly. Help us make the definitive film about service dogs, who bring out the best in humanity.\r\n\r\nFilmmaker Billy Blake has launched this Kickstarter to help him make Humanity’s Best Friend -  a new feature length documentary about the world of service dogs.  The film will follow amazing dogs that are trained - arduously and with precision - to perform a wide variety of tasks, which they perform with loyalty and devotion. \r\n\r\nThe film will also follow recipients (many living with physical and other disabilities) for whom the dogs assist at a level that is life-altering and can be life-saving. \r\n\r\nThe film will present a heartfelt and emotional journey, through the union between dog and person, showing the significant changes that occur, as these new companions are introduced into their lives.   ', 5, 'https://ksr-ugc.imgix.net/assets/022/744/899/789565ee506c3a6363919e2d987b9e7a_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1538438267&auto=format&gif-q=50&q=92&s=ad2f7122f4d24b869fece028c5dc5d83', 54235, 8242),
(18, 'The Community Microscope Kit', 'Microscopic worlds\r\nFrom dust motes, bacteria, chlorophyll and amoebas, a strange and fantastic world surrounds us. Working with people around the world, Public Lab has developed an affordable way to peek into this hidden world.\r\n\r\nUsing simple materials, we’ve developed a kit you can build yourself - the result of many teams’ work coming together! Introducing the Community Microscope:\r\n\r\nIt takes only fifteen minutes to build, and plugs into a smartphone or laptop. It’s a simple but elegant design -- you focus it by tightening the bolts, and the basic version is made from a webcam with its lens flipped upside down.\r\n\r\nPublic Lab is an open community of activists, tinkerers, organizers, makers, educators and scientists around the world, who have worked together to design this kit. We’ve worked with a growing coalition to take a Do-It-Yourself approach to environmental justice issues.\r\n\r\nWe welcome you to join in making these techniques more accessible!', 3, 'https://ksr-ugc.imgix.net/assets/021/201/067/2552843502b55655df68979bd5849733_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1526079366&auto=format&gif-q=50&q=92&s=f4b509308cca038c34b365c9916abdaa', 20000, 41357),
(19, 'Puzzlebox Orbit: Brain-Controlled Helicopter', 'For the past two years Puzzlebox has been producing brain-controlled helicopters for classrooms and television. Now comes the chance to fly your own.\r\n\r\nThe Purpose\r\n\r\nJoin the experiment.\r\n\r\nWe are building and selling this crazy new toy. Then we show everyone how we made it. We will sell finished, working, brain-controlled helicopters but also release guides and software for taking them apart to rebuild or customize. We will publish lessons on how mind-controlled devices actually work and how infrared signals steer the aircraft. We are testing a hypothesis that this form of cooperation can succeed commercially while aiding the pursuit of science and education.\r\n\r\nOur overall goal is to explore an Open approach to Brain-Computer Interface (BCI) technology. Advances at the cutting edge are waiting to find their way to the public and this project is our latest contribution. If our funding is successful all material including source code, hardware schematics, and documentation will be freely distributed.\r\n\r\nThen we start the next experiment.\r\n\r\nThe Product\r\n\r\nPuzzlebox Orbit features a unique spherical design that protects helicopter blades from unintended impact with objects such as walls and ceilings, while lending a pleasantly technical aesthetic. Despite remote control helicopters in general having earned a reputation for being fragile we have been extremely pleased with the build quality and resilience of our samples. They have survived several falls and collisions over the course of development and testing without noticeable damage.\r\n\r\nWe offer two models, the first designed to be used with mobile devices such as tablets and smartphones. A NeuroSky MindWave Mobile EEG headset is required to communicate with the device over Bluetooth. Our software then extracts and visualizes your brainwaves in realtime. Command signals are issued to the Puzzlebox Orbit via an infrared adapter connected to the audio port (for compatibility with Apple\'s iOS).\r\n\r\n', 3, 'https://ksr-ugc.imgix.net/assets/000/223/290/d0768364d14b2bf5345fd3cc3ab8646c_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1350978446&auto=format&gif-q=50&q=92&s=0c69b705f142793843a88f2474de3b28', 10000, 74799),
(20, '2020 Visions Premiere', 'Support 2020 Visions...\r\nwherever you are in the world\r\n“2020 Visions is pure gold, so far above the ordinary that it deserves to be the iconic drama of the year 2020, with productions in theatre, film and radio” (Maurice Thorogood, director)\r\n\r\n“2020 Visions will appeal to lots of people: anyone who’s fallen in love, and had their heart broken.” Olivia Busby (plays Belinda, Natasha & Lucy)\r\n\r\nThis is your opportunity to be associated with this amazing project from the very start, wherever you are in the world. You will be helping us to get Paddy Gormley’s beautiful play up on stage and recorded on video for the very first time.  \r\n\r\nWe’ve chosen the OSO studio theatre in Barnes, London for the premiere run. It seats just 74 people, so this is going to be up close and personal, with the action happening just a few feet away from your seat. \r\n\r\nWe’re going to make a private video too, so that you can be part of the audience even if London is beyond your reach, by becoming a Video Supporter or Video Angel. \r\n\r\nEither way, you’ll be in on the ground floor of the 2020 Visions high-rise, for we are convinced that 2020 Visions has a very big future, in the theatre, and beyond the theatre, in the UK, and everywhere in the world where people take an interest in the social and cultural history of Britain.\r\n\r\nOlivia Busby\'s Buzz Blog\r\nIn the second edition of her \"Buzz Blog\", Olivia Busby portrays, in quick succession, the three characters she plays in 2020 Visions:  Belinda (1960), Natasha (1980) & Lucy (2000).', 5, 'https://ksr-ugc.imgix.net/assets/023/208/202/fc77be1c4ef9f33301ba997de9371ef3_original.png?ixlib=rb-1.1.0&w=680&fit=max&v=1541811791&auto=format&gif-q=50&lossless=true&s=58f386c650b967023870d3c9ba71be4d', 1130, 2619);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
