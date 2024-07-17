const allQuestions = [
            {
                question: "In which year did Christopher Columbus first reach the Americas?",
                answers: ["1492", "1776", "1066", "1215"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of Rome?",
                answers: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                correct: 1
            },
            {
                question: "Which ancient wonder was located in Alexandria, Egypt?",
                answers: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse", "Temple of Artemis"],
                correct: 2
            },
            {
                question: "In which year did World War II end?",
                answers: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who wrote the Declaration of Independence?",
                answers: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                correct: 2
            },
            {
                question: "When was the Great Wall of China completed?",
                answers: ["200 BC", "1200 AD", "1800 AD", "500 AD"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                answers: ["Roman", "Ottoman", "Mongol", "Persian"],
                correct: 2
            },
            {
                question: "In what year did the French Revolution begin?",
                answers: ["1689", "1789", "1889", "1989"],
                correct: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "What was the name of the first artificial satellite launched into space?",
                answers: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Apollo 1"],
                correct: 1
            },
            {
                question: "Which civilization built the Machu Picchu complex?",
                answers: ["Aztec", "Maya", "Inca", "Olmec"],
                correct: 2
            },
            {
                question: "Who was the first woman to fly solo across the Atlantic Ocean?",
                answers: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
                correct: 0
            },
            {
                question: "In which year did the Berlin Wall fall?",
                answers: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
                answers: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leonid Brezhnev"],
                correct: 2
            },
            {
                question: "Which country was NOT part of the Allied Powers during World War II?",
                answers: ["United States", "Soviet Union", "United Kingdom", "Italy"],
                correct: 3
            },
            {
                question: "In what year did the Titanic sink?",
                answers: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                question: "Who was the first President of the United States?",
                answers: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
                correct: 2
            },
            {
                question: "Which ancient civilization built the pyramids at Giza?",
                answers: ["Mesopotamians", "Greeks", "Romans", "Egyptians"],
                correct: 3
            },
            {
                question: "When did the Renaissance period begin?",
                answers: ["12th century", "14th century", "16th century", "18th century"],
                correct: 1
            },
            {
                question: "Who wrote 'The Prince', a treatise on political power?",
                answers: ["Dante Alighieri", "Niccolò Machiavelli", "Giovanni Boccaccio", "Francesco Petrarca"],
                correct: 1
            },
            {
                question: "Which empire was defeated in World War I?",
                answers: ["British Empire", "Russian Empire", "Ottoman Empire", "French Empire"],
                correct: 2
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                answers: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl S. Buck"],
                correct: 0
            },
            {
                question: "In which year did the United States declare its independence?",
                answers: ["1773", "1774", "1775", "1776"],
                correct: 3
            },
            {
                question: "Who was the leader of the Soviet Union during most of World War II?",
                answers: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
                correct: 1
            },
            {
                question: "Which country was the first to circumnavigate the globe?",
                answers: ["Portugal", "Spain", "England", "Netherlands"],
                correct: 1
            },
            {
                question: "In what year did the American Civil War end?",
                answers: ["1861", "1863", "1865", "1867"],
                correct: 2
            },
            {
                question: "Who was the longest-reigning British monarch?",
                answers: ["Victoria", "Elizabeth II", "George III", "Henry VIII"],
                correct: 1
            },
            {
                question: "Which civilization developed the concept of zero?",
                answers: ["Greek", "Roman", "Mayan", "Indian"],
                correct: 3
            },
            {
                question: "When was the United Nations founded?",
                answers: ["1919", "1935", "1945", "1955"],
                correct: 2
            },
            {
                question: "Who discovered penicillin?",
                answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Joseph Lister"],
                correct: 1
            },
            {
                question: "Which country was the first to send a human to space?",
                answers: ["United States", "Soviet Union", "China", "Germany"],
                correct: 1
            },
            {
                question: "In which year did the Industrial Revolution begin?",
                answers: ["1650", "1700", "1750", "1800"],
                correct: 2
            },
            {
                question: "Who was the primary author of the Communist Manifesto?",
                answers: ["Vladimir Lenin", "Joseph Stalin", "Karl Marx", "Friedrich Engels"],
                correct: 2
            },
            {
                question: "Which empire was known as 'the empire on which the sun never sets'?",
                answers: ["Roman Empire", "Mongol Empire", "Ottoman Empire", "British Empire"],
                correct: 3
            },
            {
                question: "When did the Cold War end?",
                answers: ["1985", "1989", "1991", "1993"],
                correct: 2
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                answers: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
                correct: 0
            },
            {
                question: "In which year did the Protestant Reformation begin?",
                answers: ["1492", "1517", "1588", "1618"],
                correct: 1
            },
            {
                question: "Who was the leader of the Indian independence movement against British rule?",
                answers: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
                correct: 1
            },
            {
                question: "Which treaty ended World War I?",
                answers: ["Treaty of Versailles", "Treaty of Paris", "Treaty of London", "Treaty of Brest-Litovsk"],
                correct: 0
            },
            {
                question: "When was the Declaration of Human Rights adopted by the United Nations?",
                answers: ["1945", "1948", "1951", "1955"],
                correct: 1
            },
            {
                question: "Who was the last Pharaoh of Ancient Egypt?",
                answers: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ramses II"],
                correct: 1
            },
            {
                question: "In which year did the Russian Revolution take place?",
                answers: ["1905", "1914", "1917", "1922"],
                correct: 2
            },
            {
                question: "Who invented the printing press?",
                answers: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"],
                correct: 1
            },
            {
                question: "When did the Renaissance end?",
                answers: ["Late 15th century", "Late 16th century", "Late 17th century", "Late 18th century"],
                correct: 2
            },
            {
                question: "Which war is known as the 'Great War'?",
                answers: ["American Civil War", "Napoleonic Wars", "World War I", "World War II"],
                correct: 2
            },
            {
                question: "Who was the first Emperor of China?",
                answers: ["Kublai Khan", "Sun Yat-sen", "Qin Shi Huang", "Mao Zedong"],
                correct: 2
            },
            {
                question: "In which year did the Black Death pandemic peak in Europe?",
                answers: ["1248", "1348", "1448", "1548"],
                correct: 1
            },
            {
                question: "Who wrote 'The Art of War'?",
                answers: ["Confucius", "Lao Tzu", "Sun Tzu", "Mencius"],
                correct: 2
            },
            {
                question: "When was the Magna Carta signed?",
                answers: ["1015", "1115", "1215", "1315"],
                correct: 2
            }
        ];
