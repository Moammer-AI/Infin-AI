// Content in English and Arabic
var content = {
    en: {
        mainTitle: "INFIN AI",
        subTitle: "AI ACADEMY",
        sections: [
            {
                name: "Who I am",
                content: `
                    <!-- Include your image here if needed -->
                    <img src="images/my_photo.jpg" alt="Photo of Moammer ALTobi" style="max-width:100%; height:auto; display:block; margin: 0 auto;">
                    <!-- Biography -->
                    <p>I, Maamer Ali Saud Al Tobi obtained my PhD degree from Glasgow Caledonian University, UK in the year 2018 in the area of “Automatic fault diagnosis of centrifugal pumps using wavelet and artificial intelligence”. I got MSc degree in Process Engineering from Vellore Institute of Technology (University), India (Undertaken at Caledonian College of Engineering, Oman) in the year 2012. I received my bachelor degree in Mechatronics from Glasgow Caledonian University, UK (Undertaken at Caledonian College of Engineering, Oman) in 2009.</p>
                    <p>I have more than 15 years of experience as an academician and a researcher including more than 8 years in educational administration as a Deputy Head of Mechanical and Industrial Engineering Department, College of Engineering, National University of Science and Technology, Muscat. Since I did research work related to artificial Intelligence and condition monitoring in my doctoral thesis, I have rich knowledge in the unique engineering field of artificial intelligence applications in mechanical engineering.</p>
                `
            },
            {
                name: "Articles in Arabic",
                subsections: ["Article 1", "Article 2", "Article 3"]
            },
            {
                name: "Articles in English",
                subsections: ["Article 1", "Article 2", "Article 3"]
            },
            {
                name: "TV and Radio interviews",
                subsections: ["Interview 1", "Interview 2"]
            },
            {
                name: "Consulting services in AI and digital developments",
                subsections: ["Service 1", "Service 2"]
            },
            {
                name: "Training services",
                subsections: ["Training 1", "Training 2"]
            }
        ],
        footerText: "©INFIN AI 2024"
    },
    ar: {
        mainTitle: "إنفين آي",
        subTitle: "أكاديمية الذكاء الاصطناعي",
        sections: [
            {
                name: "من أنا",
                content: `
                    <!-- Include your image here if needed -->
                    <img src="images/my_photo.jpg" alt="صورة معمر التوبي" style="max-width:100%; height:auto; display:block; margin: 0 auto;">
                    <!-- Biography -->
                    <p>أنا، معمر علي سعود التوبي، حصلت على درجة الدكتوراه من جامعة غلاسكو كالدونيان، المملكة المتحدة في عام 2018 في مجال "التشخيص الآلي للأعطال في المضخات الطاردة المركزية باستخدام المويجات والذكاء الاصطناعي". حصلت على درجة الماجستير في هندسة العمليات من معهد فيلور للتكنولوجيا (الجامعة)، الهند (تم إجراؤه في كلية كاليدونيان الهندسية، عمان) في عام 2012. حصلت على درجة البكالوريوس في الميكاترونكس من جامعة غلاسكو كالدونيان، المملكة المتحدة (تم إجراؤه في كلية كاليدونيان الهندسية، عمان) في عام 2009.</p>
                    <p>لدي أكثر من 15 عامًا من الخبرة كأكاديمي وباحث، بما في ذلك أكثر من 8 سنوات في الإدارة التعليمية كنائب رئيس قسم الهندسة الميكانيكية والصناعية، كلية الهندسة، الجامعة الوطنية للعلوم والتكنولوجيا، مسقط. نظرًا لأنني قمت بعمل بحثي متعلق بالذكاء الاصطناعي ومراقبة الحالة في أطروحة الدكتوراه، لدي معرفة غنية في مجال هندسي فريد من تطبيقات الذكاء الاصطناعي على الهندسة الميكانيكية.</p>
                `
            },
            {
                name: "مقالات باللغة العربية",
                subsections: ["مقال 1", "مقال 2", "مقال 3"]
            },
            {
                name: "مقالات باللغة الإنجليزية",
                subsections: ["مقال 1", "مقال 2", "مقال 3"]
            },
            {
                name: "مقابلات تلفزيونية وإذاعية",
                subsections: ["مقابلة 1", "مقابلة 2"]
            },
            {
                name: "خدمات استشارية في الذكاء الاصطناعي والتطورات الرقمية",
                subsections: ["خدمة 1", "خدمة 2"]
            },
            {
                name: "خدمات تدريب",
                subsections: ["تدريب 1", "تدريب 2"]
            }
        ],
        footerText: "©إنفين آي 2024"
    }
};

// Current language
var currentLanguage = 'en';

// Function to update the content based on the selected language
function updateContent() {
    var langContent = content[currentLanguage];

    // Update main title and subtitle
    document.getElementById('main-title').textContent = langContent.mainTitle;
    document.getElementById('sub-title').textContent = langContent.subTitle;

    // Update footer text
    document.getElementById('footer-text').textContent = langContent.footerText;

    // Update navigation menu
    var navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = ''; // Clear existing menu items

    langContent.sections.forEach(function (section, index) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = "#";
        a.textContent = section.name;
        a.dataset.sectionIndex = index;
        a.addEventListener('click', function (e) {
            e.preventDefault();
            loadSectionContent(index);
        });
        li.appendChild(a);
        navMenu.appendChild(li);
    });

    // Set text direction
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    // Clear content area
    document.getElementById('content').innerHTML = '';
}

// Function to load section content
function loadSectionContent(index) {
    var langContent = content[currentLanguage];
    var section = langContent.sections[index];

    var contentArea = document.getElementById('content');
    contentArea.innerHTML = '';

    var h2 = document.createElement('h2');
    h2.textContent = section.name;
    contentArea.appendChild(h2);

    // Display content or subsections
    if (section.content) {
        contentArea.innerHTML += section.content;
    } else if (section.subsections) {
        // Display image placeholder
        var image = document.createElement('img');
        image.src = 'images/section-image.jpg'; // Replace with your actual image if needed
        image.alt = section.name;
        image.style.maxWidth = '100%';
        contentArea.appendChild(image);

        var ul = document.createElement('ul');
        section.subsections.forEach(function (subsection) {
            var li = document.createElement('li');
            li.textContent = subsection;
            ul.appendChild(li);
        });
        contentArea.appendChild(ul);
    }
}

// Event listeners for language selection
document.getElementById('en-button').addEventListener('click', function () {
    currentLanguage = 'en';
    updateContent();
});

document.getElementById('ar-button').addEventListener('click', function () {
    currentLanguage = 'ar';
    updateContent();
});

// Initialize content on page load
window.onload = function () {
    updateContent();
};
