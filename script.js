const celestialBodies = {
    Mercury: {
        mass: "3.30 x 10^23 kg",
        diameter: "4,880 km",
        radius: "2,440 km",
        description: "Mercury is the closest planet to the Sun.",
        additionalInfo: "Mercury is the closest planet to the Sun and has no atmosphere. Its surface is heavily cratered, resembling that of the Moon, and experiences extreme temperature fluctuations due to the lack of atmospheric insulation. During the day, it can become scorching hot, while at night, it plummets to frigid temperatures. A day on Mercury lasts longer than its year, as it takes a considerable amount of time to rotate on its axis compared to the speed of its orbit around the Sun.NASA's future plans for Mercury are more limited Supporting the BepiColombo Mission (2025):While NASA currently doesn't have an independent mission planned for Mercury, it is a partner in the European Space Agency (ESA) and Japan Aerospace Exploration Agency (JAXA) BepiColombo mission, launched in 2018. BepiColombo is scheduled to arrive at Mercury in 2025", // Добавь сюда дополнительную информацию
        image: "https://avatars.dzeninfra.ru/get-zen_doc/9123373/pub_63ec62fa2f253731cc5e9f17_63ec642e290c9a113cd7871a/scale_1200" // Замените на ваш путь к изображению
        
    },
    Venus: {
        mass: "4.87 x 10^24 kg",
        diameter: "12,104 km",
        radius: "6,052 km",
        description: "Venus is the second planet from the Sun.",
        additionalInfo: "Venus has a thick atmosphere rich in carbon dioxide and clouds of sulfuric acid, creating a runaway greenhouse effect. As a result, it is the hottest planet in the solar system. The surface features vast plains and numerous volcanic structures, with evidence suggesting that some of these volcanoes may still be active. Despite being similar in size to Earth, Venus has a very different environment, characterized by its oppressive heat and dense atmosphere.DAVINCI+Launch Date: Scheduled for 2029.Objective: To analyze the composition of Venus's atmosphere, focusing on noble gases and compounds that might indicate past habitability.Key Facts:The mission will include a descent probe that will analyze atmospheric samples and take images of the surface.It aims to provide insights into how Venus's atmosphere evolved and its geological history", // Добавь сюда дополнительную информацию
        image: "https://imgtest.mir24.tv/uploaded/images/crops/2021/September/1200x600_0x300_wide_crop_20210901092007_6fa502da_7aa778e6a90c8603e1967f89e4414fd7e60ac727a3b98f16d59542c56b2b6d10.jpg" // Замените на ваш путь к изображению
        

    },
    Earth: {
        mass: "5.97 x 10^24 kg",
        diameter: "12,742 km",
        radius: "6,371 km",
        description: "Earth is the third planet from the Sun and the only known planet to support life.",
        additionalInfo: "Earth is the only planet known to support life, with a diverse range of ecosystems and climates. It has a protective atmosphere that contains a mix of nitrogen and oxygen, allowing for the presence of liquid water in all three states solid, liquid, and gas. About seventy-one percent of Earth's surface is covered in water, while the land is home to a variety of geographical features, including mountains, forests, deserts.NASA's future plans for Earth focus on understanding and mitigating the impacts of climate change, advancing scientific research, and improving technologies that benefit life on Earth. .Upcoming Missions: NASA is launching several new missions to improve climate predictions, including the NISAR (NASA-ISRO Synthetic Aperture Radar) mission, scheduled for 2024, which will monitor changes in Earth's surface, including deforestation, melting ice, and natural disasters", // Добавь сюда дополнительную информацию
        image: "https://www.rabstol.net/uploads/gallery/main/11/rabstol_net_space_31.jpg" // Замените на ваш путь к изображению
        

    },
    Mars: {
        mass: "6.42 x 10^23 kg",
        diameter: "6,779 km",
        radius: "3,389.5 km",
        description: "Mars is known as the Red Planet.",
        additionalInfo: "Mars, often referred to as the Red Planet is known for its iron oxide-rich surface that gives it a reddish appearance. It has a thin atmosphere composed mostly of carbon dioxide, which makes it difficult for liquid water to exist on the surface for long periods. Mars is home to the largest volcano in the solar system, Olympus Mons, and features a massive canyon system called Valles Marineris. Scientists have discovered evidence of ancient riverbeds and polar ice caps, leading to ongoing exploration for signs of past life.Futute plans(mars)Human Exploration (Late 2030s to 2040s): NASA's long-term goal is to send astronauts to Mars. This is part of their Artemis program, which aims to establish a sustainable human presence on the Moon by the late 2020s as a stepping stone for Mars", // Добавь сюда дополнительную информацию
        image: "https://cdna.artstation.com/p/assets/covers/images/060/777/346/large/nikita-kryukovchenko-nikita-kryukovchenko-image.jpg?1679316805"  // Замените на ваш путь к изображению
        
    },
    Jupiter: {
        mass: "1.90 x 10^27 kg",
        diameter: "139,822 km",
        radius: "69,911 km",
        description: "Jupiter is the largest planet in our solar system.",
        additionalInfo: "Jupiter is the largest planet in the solar system and is classified as a gas giant. Its atmosphere is primarily composed of hydrogen and helium, featuring bands of clouds and intense storms, including the Great Red Spot, a massive storm that has persisted for centuries. Jupiter does not have a solid surface, and its strong magnetic field and numerous moons are notable features. It has over seventy moons, including the Galilean moons Io, Europa, Ganymede, and Callisto, each of which has unique characteristics.While there are no specific missions officially planned beyond Europa Clipper at this time, scientists and researchers are continuously proposing new concepts, including:Jupiter Icy Moons Explorer (JUICE): Although this is a European Space Agency mission set to launch in 2023 (with arrival at Jupiter in 2031), it aims to study Jupiter and its icy moons, including Europa.Potential follow-up missions to further explore Ganymede and Callisto, both of which also have intriguing features that could provide insights into planetary formation and potential habitability", // Добавь сюда дополнительную информацию
        image: "https://media.sketchfab.com/models/85d2ee4f43084582a2597c20356daf59/thumbnails/20bfb8b3aed8424094a0857e956b8dd4/1ae1472126f64ecf82b8708a88d398fc.jpeg" // Замените на ваш путь к изображению
        
    },
    Saturn: {
        mass: "5.68 x 10^26 kg",
        diameter: "116,464 km",
        radius: "58,232 km",
        description: "Saturn is famous for its rings.",
        additionalInfo: "Saturn is renowned for its spectacular rings, which are composed of ice and rock particles. Like Jupiter, it is a gas giant primarily made of hydrogen and helium. Saturn's atmosphere exhibits strong winds and storms. It has a complex system of rings divided into several segments, with the A and B rings being the most prominent. Saturn is also home to over eighty known moons, the largest of which is Titan, notable for having a thick atmosphere and lakes of liquid methane.Titan Dragonfly MissionLaunch Date: Scheduled for 2027.Objective: To explore Titan, Saturn’s largest moon, which has a thick atmosphere and surface lakes of liquid methane and ethane.Key Facts:Dragonfly is a rotorcraft lander that will fly to multiple sites on Titan to study its chemistry and search for potential signs of life. It will investigate the moon's surface and atmospheric processes, helping scientists understand its prebiotic chemistry", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=85fc570bc05b85a43aac83181656efb9_l-4872349-images-thumbs&n=13" // Замените на ваш путь к изображению
        
    },
    Uranus: {
        mass: "8.68 x 10^25 kg",
        diameter: "50,724 km",
        radius: "25,362 km",
        description: "Uranus is known for its unusual rotation.",
        additionalInfo: "Uranus is unique among the planets due to its extreme axial tilt, causing it to rotate on its side. This peculiar rotation leads to unusual seasonal variations. The atmosphere of Uranus contains hydrogen, helium, and methane, giving it a blue appearance. It has a faint ring system and is known to have twenty-seven moons, with Titania and Oberon being the largest. The combination of its tilt and composition makes Uranus one of the most intriguing planets to study.Uranus Orbiter and ProbeMission Concept: A proposed mission to send an orbiter and probe to study Uranus and its moons.Launch Window: If approved, a potential launch could occur in the 2030s, with a journey that might take about 10-15 years to reach Uranus, placing arrival around 2040-2050.Objectives: To analyze the atmosphere, magnetic field, rings, and moons of Uranus, contributing to our understanding of ice giants", // Добавь сюда дополнительную информацию
        image: "https://sun9-71.userapi.com/impg/NFZ6811HXrf7oebOBTbIJ8rQrgc0Hypcjs39DQ/VGgClKnZBAU.jpg?size=1219x640&quality=96&sign=351f573ddd8b0e98bc1e80e66d298d5c&c_uniq_tag=mhjETwE3CzbnpAuoJZgjNRHGo8FCIvbrNWHElHHYhg8&type=album" // Замените на ваш путь к изображению
        
    },
    Neptune: {
        mass: "1.02 x 10^26 kg",
        diameter: "49,244 km",
        radius: "24,622 km",
        description: "Neptune is the farthest planet from the Sun.",
        additionalInfo: "Neptune is the farthest planet from the Sun and is characterized by its deep blue color, which is also due to the presence of methane in its atmosphere. It experiences some of the strongest winds in the solar system and features storm systems, including the Great Dark Spot, reminiscent of Jupiter’s storms. Neptune has a cold atmosphere, making it one of the coldest planets in the solar system. It has fourteen known moons, with Triton being the largest, notable for its retrograde orbit, suggesting it may have been captured by Neptune’s gravitational pull.Neptune OrbiterMission Concept: A proposed mission to send an orbiter to study Neptune and its moons, particularly Triton, which is of great interest due to its potential for geologic activity and possible subsurface ocean.Launch Window: If approved, a potential launch could occur in the 2030s, with a travel time of about 10-12 years, leading to arrival around 2040-2050.Objectives: To investigate Neptune's atmosphere, weather patterns, magnetic field, and rings, as well as conduct detailed studies of Triton’s surface and geology", // Добавь сюда дополнительную информацию
        image: "https://media.baamboozle.com/uploads/images/82375/1595260012_333359"  // Замените на ваш путь к изображению
        
    },
    Ceres: {
        mass: "9.07 x 10^20 kg",
        diameter: "940 km",
        radius: "469 km",
        description: "Ceres is the largest object in the asteroid belt.",
        additionalInfo: "Ceres, being the largest object in the asteroid belt, currently does not pose an immediate threat to Earth. However, since its orbit lies within the asteroid belt between Mars and Jupiter, it can serve as an indicator for assessing other objects in this region. Despite its stable orbit, it is important to note that the orbits of asteroids can change over time due to various factors, such as gravitational interactions with other planets. These changes could potentially lead to Ceres or its fragments being on a collision course with Earth", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Vesta: {
        mass: "2.59 x 10^20 kg",
        diameter: "525.4 km",
        radius: "262.7 km",
        description: "Vesta is one of the largest asteroids in the asteroid belt.",
        additionalInfo: "", // Добавь сюда дополнительную информацию
        additionalInfo:"Vesta, as one of the largest asteroids, also does not currently pose a threat to our planet. Vesta has a stable orbit that does not cross Earth's orbit, and no changes have been observed that could put it at risk. However, its size and composition make Vesta an important object for study. Scientists continue to monitor its orbit to prevent potential collisions with other objects that may disrupt its trajectory",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Pallas: {
        mass: "4.2 x 10^20 kg",
        diameter: "512 km",
        radius: "256 km",
        description: "Pallas is the second largest asteroid.",
        additionalInfo: "Pallas does not pose an immediate threat to Earth, as its orbit is also stable and does not intersect with our planet's orbit. However, this does not rule out the possibility of changes to its orbit in the future due to gravitational influences from other planets. Such changes could make Pallas a potential threat. Given its size and composition, researchers are conducting studies to understand its history and behavior, which may help in assessing its danger", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Hygiea: {
        mass: "8.56 x 10^19 kg",
        diameter: "430 km",
        radius: "215 km",
        description: "Hygiea is the fourth largest asteroid.",
        additionalInfo: "Hygiea is the fourth-largest asteroid, and like other asteroids in the belt, it currently does not pose a threat to Earth. However, observations show that its orbit is relatively stable, though changes in the gravitational field of other planets may affect its path in the future. Studying Hygiea is also important for understanding the dynamics of the asteroid belt, as asteroids in this region may represent a potential danger in the long term", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Eros: {
        mass: "6.69 x 10^15 kg",
        diameter: "16.84 km",
        radius: "8.42 km",
        description: "Eros is a near-Earth asteroid.",
        additionalInfo: "Eros is a near-Earth asteroid, making it an interesting object for studying potential threats. It became one of the first asteroids visited by a spacecraft, providing important data about its composition and structure. While its orbit does not currently intersect with Earth's orbit, its size and proximity to our planet make it a potential threat if its orbit changes. Given that Eros is over seven kilometers long, even a small change in its trajectory could lead to a dangerous collision", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Juno: {
        mass: "5.38 x 10^19 kg",
        diameter: "234.5 km",
        radius: "117.25 km",
        description: "Juno is one of the largest asteroids in the asteroid belt.",
        additionalInfo: "Juno does not pose an immediate threat to Earth, as its orbit is stable and does not intersect with our planet's orbit. However, scientists carefully monitor its movements, as changes in the orbits of asteroids can occur due to gravitational interactions. Studying asteroids like Juno is crucial for understanding their behavior and predicting possible threats", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Ethel: {
        mass: "5.23 x 10^18 kg",
        diameter: "150 km",
        radius: "75 km",
        description: "Ethel is a smaller asteroid in the asteroid belt.",
        additionalInfo: "Ethel is a smaller asteroid that does not pose a threat to Earth at present. However, like other asteroids, there is always the possibility of changes in its orbit due to various factors, such as collisions with other objects or gravitational influences. Even a small asteroid can present a danger if its trajectory changes, so it is important to closely monitor its movements", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Davida: {
        mass: "6.94 x 10^19 kg",
        diameter: "220 km",
        radius: "110 km",
        description: "Davida is a large asteroid.",
        additionalInfo: "Davida, like other asteroids in the belt, does not pose a threat to Earth at this time. However, scientists continue to monitor its orbit, as changes in the gravitational field of other bodies could potentially affect its path. Studying such asteroids is essential for understanding the dynamics and history of the asteroid belt, as well as identifying potential threats", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Euphrosyne: {
        mass: "6.56 x 10^19 kg",
        diameter: "320 km",
        radius: "160 km",
        description: "Euphrosyne is one of the largest asteroids in the asteroid belt.",
        additionalInfo: "Euphrosyne does not pose an immediate threat to Earth, as its orbit is stable and does not intersect with our planet. However, like other asteroids, changes in its orbit can occur, and it may become a subject of interest for observation and analysis in the future. Understanding potential threats from asteroids like Euphrosyne is important for planning safety measures", // Добавь сюда дополнительную информацию
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
};

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const celestialBody = celestialBodies[query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()];

    if (celestialBody) {
        resultsDiv.innerHTML = `
            <h2>${query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()}</h2>
            <img src="${celestialBody.image}" alt="${query}" style="width: 100%; border-radius: 8px;"/>
            <p><strong>Mass:</strong> ${celestialBody.mass}</p>
            <p><strong>Diameter:</strong> ${celestialBody.diameter}</p>
            <p><strong>Radius:</strong> ${celestialBody.radius}</p>
            <p><strong>Description:</strong> ${celestialBody.description}</p>
            <p><strong>Additional Info:</strong> ${celestialBody.additionalInfo}</p>
        
        `;
        resultsDiv.style.opacity = 1;
    } else {
        resultsDiv.innerHTML = '<p>Body not found. Please enter a valid planet or asteroid name.</p>';
    }
});

// Генерация звезд
function createStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 150; // Количество звезд

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1; // Размер звезды
        star.className = `star star-${Math.random() < 0.5 ? 'small' : Math.random() < 0.5 ? 'medium' : 'large'}`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`; // Позиция по горизонтали
        star.style.animationDuration = `${Math.random() * 5 + 15}s`; // Разная скорость анимации
        star.style.animationDelay = `${Math.random() * 10}s`; // Задержка анимации, чтобы звезды появлялись постепенно
        starContainer.appendChild(star);
    }
}

// Вызов функции для генерации звезд
createStars();
