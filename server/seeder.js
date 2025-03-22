// server/seeder.js
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const {
    Service,
    TeamMember,
    Testimonial,
    Partner,
    Credential,
    Stat,
    Industry,
    BlogPost
} = require('./models');

// Connect to database
connectDB();

// Sample data
const services = [
    {
        title: 'Transaction Advisory',
        slug: 'transaction-advisory',
        description: 'Navigating complex business transactions requires expert guidance to ensure strategic growth and financial success. At MGA & Associates, our Transaction Advisory Services provide businesses with the insights and expertise needed to make informed decisions during mergers, acquisitions, investments, and restructuring. We offer a comprehensive suite of services, including Mergers & Acquisitions Advisory, Financial Due Diligence, Business Valuation, Private Equity & Venture Capital Support, Debt & Equity Structuring, Business Restructuring, and Tax & Regulatory Compliance. Our client-focused approach ensures that each transaction is tailored to meet your unique business objectives.',
        shortDescription: 'Strategic financial guidance for mergers, acquisitions, valuations, and corporate restructuring decisions.',
        image: 'img/services/S1.png',
        order: 1
    },
    {
        title: 'Due Diligence',
        slug: 'due-diligence',
        description: 'In today\'s fast-paced business landscape, thorough due diligence is crucial to making well-informed and successful transactions. Whether you are considering a merger, acquisition, investment, or partnership, ensuring that all risks and opportunities are fully understood is essential to safeguarding your business interests. At MGA & Associates, our Due Diligence Services provide a detailed and systematic evaluation of all aspects of a potential transaction. Our team of experienced professionals helps you uncover hidden risks, assess opportunities, and make informed decisions based on comprehensive, reliable data. Through meticulous research and analysis, we offer valuable insights that ensure you are equipped with the necessary information to proceed confidently.',
        shortDescription: 'Comprehensive assessment of financial, legal, and operational aspects for businesses.',
        image: 'img/services/S2.png',
        order: 2
    },
    {
        title: 'Tax Advisory',
        slug: 'tax-advisory',
        description: 'Tax planning is a crucial component of any business strategy. At MGA & Associates, our Tax Advisory Services are designed to provide businesses and individuals with tailored solutions that optimize tax liabilities, ensure compliance, and support financial growth. Navigating the complex world of taxation can be challenging, but with our expertise, you can stay ahead of regulatory changes and maximize the potential benefits of tax laws. We offer comprehensive tax advisory services for a wide range of industries, focusing on strategic tax planning, risk management, and the development of efficient tax structures. Whether you\'re an individual, startup, or large corporation, our team ensures that your tax position is optimized while maintaining strict compliance with tax regulations.',
        shortDescription: 'Providing expert guidance on tax planning, compliance, and strategy optimization.',
        image: 'img/services/S3.jpg',
        order: 3
    },
    {
        title: 'Virtual CFO',
        slug: 'virtual-cfo',
        description: 'As businesses evolve, the need for expert financial guidance and strategic decision-making becomes more crucial. However, not every organization has the resources to hire a full-time Chief Financial Officer (CFO). At MGA & Associates, we offer Virtual CFO Services, providing you with the financial expertise, leadership, and insights you need without the overhead of a full-time hire. Our Virtual CFO Services deliver high-level financial management, planning, and advisory tailored to your business\'s unique needs. We become an integral part of your team, working closely with you to enhance financial performance, optimize cash flow, and support strategic growth. Whether you\'re a startup or an established business, our Virtual CFO services allow you to focus on what matters most—growing your business—while we handle the complexities of your financial operations.',
        shortDescription: 'Strategic financial guidance, cash flow management, budgeting, and business planning.',
        image: 'img/services/S4.png',
        order: 4
    },
    {
        title: 'Forensic Audits',
        slug: 'forensic-audits',
        description: 'In today\'s complex business environment, organizations face an increasing risk of financial fraud, mismanagement, and other financial irregularities. Whether due to internal misconduct, external fraud, or poor financial controls, these issues can have severe consequences. A Forensic Audit is an investigative process designed to uncover and assess these irregularities, providing clients with a detailed and thorough examination of financial records. At MGA & Associates, our Forensic Audit Services are tailored to uncover fraudulent activities, misappropriation of funds, and other financial misconduct. Our team uses specialized techniques and a systematic approach to gather evidence, analyze financial records, and reconstruct events to help resolve disputes, enforce legal actions, or provide clarity in situations involving financial wrongdoing.',
        shortDescription: 'Forensic audits investigate financial discrepancies, fraud, and provide legal evidence.',
        image: 'img/services/S5.jpg',
        order: 5
    },
    {
        title: 'Investment Advisory & Wealth Management',
        slug: 'investment-advisory',
        description: 'In today\'s complex financial world, making smart investment decisions is essential to growing and safeguarding your wealth. At MGA & Associates, our Investment Advisory & Wealth Management services are designed to provide personalized strategies that align with your financial goals, risk tolerance, and time horizon. Whether you\'re looking to build wealth for the future, preserve your assets, or plan for retirement, our team of experienced professionals offers tailored advice and solutions to help you achieve financial security and success. Our approach to wealth management combines deep market knowledge, advanced financial planning tools, and a client-focused strategy to optimize your investment portfolio, reduce risks, and maximize returns.',
        shortDescription: 'Providing expert guidance on investments, portfolio management, and wealth growth.',
        image: 'img/services/S6.jpg',
        order: 6
    },
    {
        title: 'International Taxation & Compliance',
        slug: 'international-taxation',
        description: 'In a globalized business environment, understanding and complying with international tax regulations is more important than ever. With complex tax laws and varying compliance requirements across different jurisdictions, businesses need expert guidance to navigate the intricacies of international taxation and avoid costly pitfalls. At MGA & Associates, we specialize in providing International Taxation and Compliance Services to help businesses manage their global tax obligations efficiently and in full compliance with local and international regulations. Our team of experienced professionals ensures that you are not only compliant with tax laws across multiple regions but also optimize your tax position to drive long-term success.',
        shortDescription: 'Global tax strategies, compliance, planning, reporting, and cross-border solutions.',
        image: 'img/services/S7.jpg',
        order: 7
    },
    {
        title: 'Audit & Assurance Services',
        slug: 'audit-assurance',
        description: 'At MGA & Associates, we understand the critical role that accurate, reliable financial reporting plays in building trust with stakeholders and driving business success. Our Audit & Assurance Services are designed to provide you with an independent and objective evaluation of your financial statements, ensuring compliance with relevant regulations, and improving transparency in your financial reporting. Through our comprehensive audits and reviews, we help businesses of all sizes and industries strengthen their internal controls, mitigate risks, and provide confidence to investors, regulators, and other stakeholders. Whether you are a small business or a large enterprise, our expert team works closely with you to deliver timely, actionable insights that enhance your financial health and business operations.',
        shortDescription: 'Providing independent assessments to ensure financial accuracy, compliance, and transparency.',
        image: 'img/services/S8.jpeg',
        order: 8
    }
];

const stats = [
    { title: 'Established Since', value: 2000, icon: 'fas fa-building text-primary fa-3x mb-3', order: 1 },
    { title: 'No of Certificates', value: 16, icon: 'fas fa-certificate text-primary fa-3x mb-3', order: 2 },
    { title: 'No of Other Employees', value: 150, icon: 'fas fa-users text-primary fa-3x mb-3', order: 3 },
    { title: 'No of CA Employees', value: 15, icon: 'fas fa-user-tie text-primary fa-3x mb-3', order: 4 },
    { title: 'No of Partners', value: 10, icon: 'fas fa-handshake text-primary fa-3x mb-3', order: 5 },
    { title: 'CA Interns', value: 8, icon: 'fas fa-user-graduate text-primary fa-3x mb-3', order: 6 },
    { title: 'CMA Interns', value: 5, icon: 'fas fa-graduation-cap text-primary fa-3x mb-3', order: 7 },
    { title: 'ACCA Interns', value: 2, icon: 'fas fa-user-check text-primary fa-3x mb-3', order: 8 },
    { title: 'Advocates', value: 3, icon: 'fas fa-balance-scale text-primary fa-3x mb-3', order: 9 },
    { title: 'Company Secretaries', value: 4, icon: 'fas fa-briefcase text-primary fa-3x mb-3', order: 10 },
    { title: 'Ex-Bankers', value: 3, icon: 'fas fa-piggy-bank text-primary fa-3x mb-3', order: 11 },
    { title: 'Ex-Government Officer', value: 1, icon: 'fas fa-user-shield text-primary fa-3x mb-3', order: 12 }
];

const industries = [
    { name: 'Hospitality', icon: 'fas fa-hotel fa-4x text-primary', order: 1 },
    { name: 'Apparels', icon: 'fas fa-tshirt fa-4x text-primary', order: 2 },
    { name: 'Automotive', icon: 'fas fa-car fa-4x text-primary', order: 3 },
    { name: 'Power Genco & Discom', icon: 'fas fa-bolt fa-4x text-primary', order: 4 },
    { name: 'Steel & Metals', icon: 'fas fa-industry fa-4x text-primary', order: 5 },
    { name: 'Agro', icon: 'fas fa-seedling fa-4x text-primary', order: 6 },
    { name: 'Retail', icon: 'fas fa-shopping-cart fa-4x text-primary', order: 7 },
    { name: 'FMCG', icon: 'fas fa-box fa-4x text-primary', order: 8 },
    { name: 'PSU', icon: 'fas fa-building fa-4x text-primary', order: 9 },
    { name: 'Infrastructure & Realty', icon: 'fas fa-city fa-4x text-primary', order: 10 },
    { name: 'Banking', icon: 'fas fa-university fa-4x text-primary', order: 11 },
    { name: 'Education', icon: 'fas fa-graduation-cap fa-4x text-primary', order: 12 },
    { name: 'Oil & Gas', icon: 'fas fa-gas-pump fa-4x text-primary', order: 13 },
    { name: 'Mining', icon: 'fas fa-hard-hat fa-4x text-primary', order: 14 },
    { name: 'Healthcare', icon: 'fas fa-heartbeat fa-4x text-primary', order: 15 },
    { name: 'Aircraft Chartering', icon: 'fas fa-plane fa-4x text-primary', order: 16 },
    { name: 'Insurance', icon: 'fas fa-shield-alt fa-4x text-primary', order: 17 },
    { name: 'Telecom Tower', icon: 'fas fa-broadcast-tower fa-4x text-primary', order: 18 },
    { name: 'Ceramics', icon: 'fas fa-mug-hot fa-4x text-primary', order: 19 },
    { name: 'Liquor', icon: 'fas fa-wine-bottle fa-4x text-primary', order: 20 }
];

const blogPosts = [
    {
        title: 'Budget 2025: A Win for the Common Man or Big Corporations?',
        slug: 'budget-2025',
        summary: 'Examining whether Budget 2025 benefits individuals or corporate giants.',
        content: `
      <h1 class="display-5 mb-4" style="font-size: 30px;">Budget 2025: A Win for the Common Man or Big Corporations?</h1>
      <p class="mb-4">For over 25 years, MGA Group has been helping businesses and individuals navigate financial complexities. With each budget announcement, we critically analyze its impact on different sectors of the economy. Budget 2025 presents several tax reforms and policy changes, but the real question is—who benefits the most?</p>
      <p class="mb-4">While the government claims to focus on economic growth and inclusivity, a deeper look raises concerns. Is this truly a "common man's budget", or does it favor big corporations?</p>
      <h4>1️⃣ The Forced Shift to the New Tax Regime</h4>
      <p>🔹 The old tax regime offered essential benefits like home loan interest deductions, insurance exemptions, and 80C investments—key tools for middle-class financial planning.</p>
      <p>🔹 By removing these deductions, taxpayers are left with fewer incentives to save and invest.</p>
      <p>🔹 While the government argues this simplifies tax filing, it also makes tax collection easier for authorities.</p>
      <h4>2️⃣ Capital Gains Tax – Who Really Pays the Price?</h4>
      <p>🔹 Retail investors and small traders who rely on market gains will see their profits shrink.</p>
      <p>🔹 Corporations and high-net-worth individuals (HNIs) have sophisticated tax-saving strategies to minimize liabilities.</p>
      <h4>3️⃣ Rural Development Funds – Will They Reach the Right Hands?</h4>
      <p>🔹 While increased funding is a positive step, where is the accountability?</p>
      <p>🔹 A transparent tracking system should be in place to ensure these funds actually reach farmers and rural communities instead of being lost in bureaucratic inefficiencies.</p>
      <h4>4️⃣ Angel Tax Abolition – A Boost for Startups, But What About SMEs?</h4>
      <p>🔹 Why was similar relief not extended to small and medium enterprises (SMEs)?</p>
      <p>🔹 SMEs continue to struggle with high tax burdens and difficulty in accessing credit.</p>
      <h3>Conclusion: Who Wins in Budget 2025?</h3>
      <p>✅ The budget favors structured corporations, startups, and big investors.</p>
      <p>❌ The common man, small investors, and SMEs have been overlooked in crucial areas.</p>
      <p>📞 Have Questions? Let's Discuss! Call us now at <strong>88280 29351</strong>.</p>
    `,
        image: 'img/blog/Budget 2025.png',
        publishedAt: new Date('2025-02-15')
    },
    {
        title: 'Struggling with Business Problems? MGA Group is Here to Help!',
        slug: 'struggling-with-business-problems',
        summary: 'MGA Group provides expert solutions for business challenges and growth.',
        content: `
      <h1 class="display-5 mb-4" style="font-size: 30px;">Struggling with Business Problems? MGA Group is Here to Help!</h1>
      <p class="mb-4">Running a business is tough. There are always problems popping up, and sometimes, it feels like no one can help. Maybe you're stuck with a tricky issue, or your marketing isn't working, or you just need someone to guide you. That's where #MGA Group comes in. We're not just another company – we're your partners in solving problems and growing your business.</p>
      <p class="mb-4">Think of us as your go-to team for everything from fixing unsolvable issues to helping you market your products like a pro. Let's break it down and show you how we can make your life easier and your business better.</p>
      <h4>Got a Problem No One Can Solve? We've Got You! 🧐</h4>
      <p>We've all been there – facing a #problem that feels impossible to crack. Maybe it's a technical glitch, a #marketing strategy that's not working, or a big decision you're stuck on. The good news? #MGA Group loves a challenge!</p>
      <h5>Why We're Different:</h5>
      <ul>
        <li>We Listen: First, we take the time to understand your problem. No quick fixes – we dig deep to find the #real #issue.</li>
        <li>We Think Outside the Box: If the usual #solutions aren't #working, we get #creative.</li>
        <li>We Stick With You: We don't just hand you a solution and walk away. We're here to support you every step of the way.</li>
      </ul>
      <p>🚨 Don't #stress – #MGA Group is here to help. Reach out to us today, and let's fix it together!</p>
      <h4>Need to #Market Your #Product or #Services? We'll Make It Shine! 📈</h4>
      <p>Let's be honest – marketing can be overwhelming. But here's the thing: you don't have to do it alone. MGA Group knows marketing inside out, and we're here to make it easy for you.</p>
      <h5>What We Do:</h5>
      <ul>
        <li>Digital Marketing: We'll help you get noticed #online with #SEO, #social media, and #ads that actually work.</li>
        <li>Content That Connects: Boring content? Not on our watch.</li>
        <li>Branding That Stands Out: Your #brand is your story. We'll help you tell it in a way that makes people remember you.</li>
      </ul>
      <p>🌟 Let #MGAGroup handle your #marketing. #Contact us today and watch your #business grow!</p>
      <h3>Conclusion: Let's Build Something Amazing Together 🌟</h3>
      <p>Running a #business is hard work. But you don't have to do it alone. Whether you're stuck with a problem, need help with #marketing, or just want guidance, #MGA Group is here for you.</p>
      <p>🌟 Contact MGA Group today, and let's make it happen together! 🚀</p>
      <p>📞 Call us now: <strong>+91 - 88280 29351</strong></p>
    `,
        image: 'img/blog/Struggling with Business Problems.png',
        publishedAt: new Date('2025-01-25')
    },
    {
        title: 'Understanding Budget 2025: Benefits, Impact, and How MGA Group Can Help',
        slug: 'understanding-budget-2025',
        summary: 'Learn about Budget 2025\'s impact and maximize your financial benefits.',
        content: `
      <h1 class="display-5 mb-4" style="font-size: 30px;">Understanding Budget 2025: Benefits, Impact, and How MGA Group Can Help</h1>
      <p class="mb-4">The Union Budget 2025 is here, bringing new tax benefits, savings opportunities, and business-friendly policies. Whether you're a salaried employee, a business owner, or an investor, understanding the budget can help you make smarter financial decisions.</p>
      <p class="mb-4">In this blog, we will break down the key benefits of Budget 2025, how you can save more on taxes, and how MGA Group can guide you through these changes.</p>
      <h4>What Are the Benefits of Budget 2025?</h4>
      <ul>
        <li><strong>1️⃣ Lower Taxes & More Savings:</strong> The government has introduced new tax slabs and deductions, reducing the tax burden for individuals and businesses. This means more money in your pocket!</li>
        <li><strong>2️⃣ Boost for Startups & Small Businesses:</strong> If you own a business, there are new tax breaks and easier loan options to help you grow. The focus is on making businesses stronger and more profitable.</li>
        <li><strong>3️⃣ More Investment Opportunities:</strong> The government is encouraging investments in infrastructure, green energy, and digital sectors. New policies will help investors get better returns.</li>
        <li><strong>4️⃣ Better Healthcare & Education:</strong> A significant part of the budget is dedicated to improving hospitals and schools, making essential services more accessible.</li>
        <li><strong>5️⃣ Digital India Growth:</strong> With a push towards digital payments, AI, and tech-driven services, businesses and professionals can benefit from digital advancements.</li>
      </ul>
      <h4>How MGA Group Can Help You with Budget 2025</h4>
      <p>Navigating budget changes can be confusing, but MGA Group is here to help!</p>
      <ul>
        <li><strong>✅ Tax Planning & Filing:</strong> We ensure you pay less tax and maximize your deductions.</li>
        <li><strong>✅ Business Growth Support:</strong> If you're a startup or SME, we help you leverage tax benefits and government schemes.</li>
        <li><strong>✅ Investment Guidance:</strong> We guide you in choosing the right investment options under Budget 2025.</li>
        <li><strong>✅ Legal & Compliance Support:</strong> Stay updated with all legal requirements to avoid penalties.</li>
      </ul>
      <h3>Conclusion: Secure Your Financial Future with MGA Group</h3>
      <p>Budget 2025 brings new opportunities for savings and growth. With MGA Group by your side, you can make the most of tax benefits, business incentives, and investment plans.</p>
      <p>🚀 Need expert financial advice? Contact MGA Associative today!</p>
    `,
        image: 'img/blog/Understanding Budget 2025.png',
        publishedAt: new Date('2025-03-05')
    },
    {
        title: 'MGA Group: Your Business\'s Silent Partner in Compliance & Growth',
        slug: 'mga-business-growth',
        summary: 'MGA Group ensures financial compliance, tax efficiency, and marketing success.',
        content: `
      <h1 class="display-5 mb-4" style="font-size: 30px;">MGA Group: Your Business's Silent Partner in Compliance & Growth</h1>
      <p class="mb-4">Every business has a story, but behind every successful business, there's often a silent partner who plays a crucial role. This partner isn't always visible, but they are the ones who make sure your business stays on track, compliant, and ready for growth. At MGA Group, we are that silent partner for your business. We ensure that your compliance, tax filings, and financial strategies are not just on point but working for you every step of the way.</p>
      <p class="mb-4">In this blog, we are going to walk you through how MGA Group isn't just a service provider but a true partner in your business journey. Let's explore how we help businesses succeed in a constantly evolving landscape of regulations, taxes, and financial opportunities.</p>
      <h4>The Compliance Journey: From Confusion to Clarity</h4>
      <p>Compliance—it's the word that every business owner dreads, but also the one that can save you from massive headaches down the road. Compliance isn't just about filling out forms or ticking boxes. It's about building a foundation for your business that stands strong, no matter the economic climate.</p>
      <h4>Tax Filing Made Easy: Your Key to Financial Peace of Mind</h4>
      <p>Tax season. It's one of the most stressful times of the year for any business. The thought of sorting through receipts, calculating deductions, and worrying about penalties can keep anyone up at night. But it doesn't have to be this way.</p>
      <h4>Fund Advisory: Unlocking Growth Opportunities with Strategic Insight</h4>
      <p>Every business has growth potential, but the path to realizing that potential often requires capital. Whether you're looking to expand, innovate, or enter new markets, finding the right funding is crucial.</p>
      <h4>The MGA Group Advantage: More Than Just a Service</h4>
      <p>What makes MGA Group different from other service providers? We don't just offer solutions; we become your partners in success. We believe in building relationships, not just contracts. Our goal is to empower you with knowledge, insights, and strategies that ensure long-term success.</p>
      <p>🌟 Contact MGA Group today, and let's take your business to the next level! 🚀</p>
      <p>📞 Call us now: <strong>+91 - 88280 29351</strong></p>
    `,
        image: 'img/blog/MGA Your Business\'s Silent.png',
        publishedAt: new Date('2025-02-10')
    }
];

// Import to database function
const importData = async () => {
    try {
        // Clear existing data
        await Service.deleteMany();
        await TeamMember.deleteMany();
        await Testimonial.deleteMany();
        await Partner.deleteMany();
        await Credential.deleteMany();
        await Stat.deleteMany();
        await Industry.deleteMany();
        await BlogPost.deleteMany();

        // Insert new data
        await Service.insertMany(services);
        await TeamMember.insertMany(teamMembers);
        await Testimonial.insertMany(testimonials);
        await Partner.insertMany(partners);
        await Credential.insertMany(credentials);
        await Stat.insertMany(stats);
        await Industry.insertMany(industries);
        await BlogPost.insertMany(blogPosts);

        console.log('Data imported successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error.message}`);
        process.exit(1);
    }
};

// Delete all data function
const destroyData = async () => {
    try {
        await Service.deleteMany();
        await TeamMember.deleteMany();
        await Testimonial.deleteMany();
        await Partner.deleteMany();
        await Credential.deleteMany();
        await Stat.deleteMany();
        await Industry.deleteMany();
        await BlogPost.deleteMany();

        console.log('Data destroyed successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error destroying data: ${error.message}`);
        process.exit(1);
    }
};

// Run script based on args
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}

const teamMembers = [
    {
        name: 'Manish Agrawal',
        position: 'Managing Partner',
        qualifications: 'Qualifications: FCA, CS, B.Com, DiFT, NISM - VI, VII\nCertifications: ICAI Certified DISA, IFRS, FTM, PFGA, GST, CCA, FAFD, MSME, Financial Securities\nPanel: Liquidator, Valuer, Independent Director, Peer Reviewer',
        image: 'img/teams/manish agarwal.jpg',
        order: 1
    },
    {
        name: 'Dinesh Kumar Singh',
        position: 'Partner',
        qualifications: 'Qualifications: FCA, CMA, LLB, M.Com, B.Com\nCertifications: DISA, CCA, GST, Forensic Accounting, Concurrent Audit of Banks',
        image: 'img/teams/dinesh singh.jpg',
        order: 2
    },
    {
        name: 'Jyotika Rai',
        position: 'Partner',
        qualifications: 'Qualifications: FCA, CFP, B.COM, ICAI Certified',
        image: 'img/teams/jyothika nalavade.jpg',
        order: 3
    },
    {
        name: 'Kusum Mishra',
        position: 'Partner',
        qualifications: 'Qualifications: ACA, B.COM',
        image: 'img/teams/kusum mishra.jpg',
        order: 4
    },
    {
        name: 'MD Thofik Tufel',
        position: 'Partner',
        qualifications: 'Qualifications: ACA, B.COM',
        image: 'img/teams/md thofiq.jpg',
        order: 5
    }
];

const testimonials = [
    {
        name: 'Rajesh Pandey',
        text: 'I wanted to take a moment to sincerely thank you Manish Ji for your exceptional financial services and support. Your expertise in this industry is truly remarkable.',
        image: 'img/testimional/R img.png',
        rating: 5
    },
    {
        name: 'Akshay Kumar',
        text: 'I acquired assistance in submitting my income tax return, and it was successfully processed. Mr. Manish & team is highly skilled in financial services and is very dedicated to completing the procedure on time. I warmly recommend any upcoming services.',
        image: 'img/testimional/A img.png',
        rating: 5
    },
    {
        name: 'Gopal Bakthavachalam',
        text: 'They successfully processed my income tax return and they are very strong in Financial Services also very much committed to no games, quality and on time delivery on promises made by the team. I strongly recommend any future services.',
        image: 'img/testimional/G img.png',
        rating: 5
    },
    {
        name: 'Shalini Kumari',
        text: 'We wanted to express our sincere gratitude for your outstanding financial services. Your dedication, expertise, and timely delivery have made a significant impact in our financial growth. Your services with regards to ITR has been particularly valuable, and we appreciate the confidence you\'ve instilled in our financial decision-making. Thank you for your support.',
        image: 'img/testimional/s img.png',
        rating: 5
    },
    {
        name: 'Murtaza ak',
        text: 'This is a CA firm who caters to all your indirect and direct taxation needs. Very experienced team and have many associate offices across the country.',
        image: 'img/testimional/M img.png',
        rating: 5
    }
];

const partners = [
    { name: 'Antar Logistics', image: 'img/partners/antar-removebg-preview.png', order: 1 },
    { name: 'Apollo Hospitals', image: 'img/partners/apollo-removebg-preview.png', order: 2 },
    { name: 'Atha Group', image: 'img/partners/atha-removebg-preview.png', order: 3 },
    { name: 'Morgan Stanley', image: 'img/partners/morgan-removebg-preview.png', order: 4 },
    { name: 'Chemfab Alkalis', image: 'img/partners/chemfab-removebg-preview.png', order: 5 },
    { name: 'The Hindu', image: 'img/partners/hindu.png', order: 6 },
    { name: 'Classic Stripes', image: 'img/partners/classic-removebg-preview.png', order: 7 },
    { name: 'DC Shriram', image: 'img/partners/dcshriram-removebg-preview.png', order: 8 },
    { name: 'COWE', image: 'img/partners/cowe.png', order: 9 },
    { name: 'Fusion Microfinance', image: 'img/partners/fusion.png', order: 10 },
    { name: 'Fortis Healthcare', image: 'img/partners/fortis-removebg-preview.png', order: 11 },
    { name: 'Gati Logistics', image: 'img/partners/gati-removebg-preview.png', order: 12 },
    { name: 'Global Green', image: 'img/partners/globalgreen-removebg-preview.png', order: 13 },
    { name: 'Indo Rama', image: 'img/partners/inod_rama-removebg-preview.png', order: 14 },
    { name: 'Max Life Insurance', image: 'img/partners/maxlife-removebg-preview.png', order: 15 },
    { name: 'PepsiCo', image: 'img/partners/pepsi-removebg-preview.png', order: 16 },
    { name: 'POCL Energy', image: 'img/partners/pocl-removebg-preview.png', order: 17 },
    { name: 'Premier Limited', image: 'img/partners/premier-removebg-preview.png', order: 18 },
    { name: 'Sparrow Health Group', image: 'img/partners/sparrow-removebg-preview.png', order: 19 },
    { name: 'TA Hydro Energy', image: 'img/partners/ta_hydro-removebg-preview.png', order: 20 },
    { name: 'Titan Company', image: 'img/partners/titan-removebg-preview.png', order: 21 }
];

const credentials = [
    // Certifications
    { type: 'certificate', title: 'ICAI Certified Peer Reviewer', icon: 'fa-solid fa-certificate text-primary' },
    { type: 'certificate', title: 'ICAI Certified DISA', icon: 'fa-solid fa-shield-halved text-success' },
    { type: 'certificate', title: 'ICAI Certified IFRS', icon: 'fa-solid fa-file-invoice text-info' },
    { type: 'certificate', title: 'ICAI Certified FTM', icon: 'fa-solid fa-book text-warning' },
    { type: 'certificate', title: 'ICAI Certified PGF', icon: 'fa-solid fa-graduation-cap text-danger' },
    { type: 'certificate', title: 'ICAI Certified GST', icon: 'fa-solid fa-coins text-secondary' },
    { type: 'certificate', title: 'ICAI Certified CCA', icon: 'fa-solid fa-user-tie text-dark' },
    { type: 'certificate', title: 'ICAI Certified FAFD', icon: 'fa-solid fa-chart-pie text-primary' },
    { type: 'certificate', title: 'ICAI Certified MSME', icon: 'fa-solid fa-industry text-success' },
    { type: 'certificate', title: 'NISM – VI', icon: 'fa-solid fa-file-invoice-dollar text-warning' },
    { type: 'certificate', title: 'NISM – VII', icon: 'fa-solid fa-file-signature text-danger' },
    { type: 'certificate', title: 'FCA', icon: 'fa-solid fa-user-graduate text-primary' },
    { type: 'certificate', title: 'ACS', icon: 'fa-solid fa-scale-balanced text-success' },
    { type: 'certificate', title: 'B.COM', icon: 'fa-solid fa-university text-info' },
    { type: 'certificate', title: 'DiFT', icon: 'fa-solid fa-hand-holding-dollar text-warning' },
    { type: 'certificate', title: 'Liquidator', icon: 'fa-solid fa-gavel text-danger' },
    { type: 'certificate', title: 'Central Society Auditor', icon: 'fa-solid fa-building-columns text-secondary' },

    // Empanelments
    { type: 'empanelment', title: 'GST Special Audit', icon: 'fa-solid fa-file-contract text-primary' },
    { type: 'empanelment', title: 'Income Tax Special Audit', icon: 'fa-solid fa-landmark text-success' },
    { type: 'empanelment', title: 'Comptroller and Auditor General (C & AG)', icon: 'fa-solid fa-balance-scale text-info' },
    { type: 'empanelment', title: 'Internal Audit for Special Panel for SME Listed Company by SEBI', icon: 'fa-solid fa-chart-line text-warning' },
    { type: 'empanelment', title: 'National Investigation Agency (Special Audit)', icon: 'fa-solid fa-user-secret text-danger' },
    { type: 'empanelment', title: 'Securities and Exchange Board of India (SEBI)', icon: 'fa-solid fa-chart-bar text-secondary' },
    { type: 'empanelment', title: 'Bombay Stock Exchange Internal Audit Panel', icon: 'fa-solid fa-briefcase text-dark' },
    { type: 'empanelment', title: 'National Stock Exchange Internal Audit Panel', icon: 'fa-solid fa-chart-bar text-primary' },
    { type: 'empanelment', title: 'Asset Specialized Monitoring Panel of IBA', icon: 'fa-solid fa-database text-success' },
    { type: 'empanelment', title: 'Audit and Stock Management (ASM)', icon: 'fa-solid fa-folder-open text-info' },
    { type: 'empanelment', title: 'CSR Fund Audit Panel', icon: 'fa-solid fa-users text-warning' },
    { type: 'empanelment', title: 'RBI Category 1 Firm', icon: 'fa-solid fa-building text-danger' },
    { type: 'empanelment', title: 'Dept. of Cooperation, Marketing & Textile, Govt Of Maharashtra', icon: 'fa-solid fa-landmark text-secondary' },
    { type: 'empanelment', title: 'Central Registrar of Co-operative Society', icon: 'fa-solid fa-building-columns text-primary' },

    // Experience
    { type: 'experience', title: 'Insurance Company', icon: 'fa-solid fa-building text-primary' },
    { type: 'experience', title: 'Government Audit', icon: 'fa-solid fa-gavel text-info', details: 'NCPOR\nNHM Goa\nNHM Palghar\nDHO Palghar\nDMO Palghar\nWADA Teachers Association' },
    { type: 'experience', title: 'Bank Statutory Audit', icon: 'fa-solid fa-university text-warning', details: 'DENA Bank\nBOM Bank\nIndian Bank\nBOB\nKarnala Corporation Bank (Central Stat Audit)' },
    { type: 'experience', title: 'Bank Concurrent Audit', icon: 'fa-solid fa-clipboard-list text-danger', details: 'Punjab and Sind Bank\nSBI\nCentral Bank of India\nNHM Goa\nBank of India\nCanara Bank\nIDBI Bank\nBank of Maharashtra\nSaurashtra Gramin Bank\nPunjab National Bank\nDENA Bank\nSyndicate Bank\nRajasthan Marudhara Gramin Bank' },
    { type: 'experience', title: 'Bank Stock Audit', icon: 'fa-solid fa-warehouse text-secondary', details: 'Union Bank\nSBI Bank\nBank of India\nCentral Bank of India\nBank of Maharashtra\nDENA Bank\nAllahabad Bank' },
    { type: 'experience', title: 'Corporate', icon: 'fa-solid fa-building-columns text-primary', details: 'Tax Audit\nGST Audit\nSTATUTORY\nCompany Audit\nCertification\nInternal Audit\nFA Audit\nStock Audit\nIFC Review Audit\nPayroll Audit\nVendor Audit' },
    { type: 'experience', title: 'International Taxation Advisory', icon: 'fa-solid fa-globe text-success', details: 'Certification\nAdvance Ruling\nFEMA & FERA Advisory\nTransfer Pricing Audit\nTransfer Pricing Report' },
    { type: 'experience', title: 'RERA', icon: 'fa-solid fa-city text-info', details: 'Compliance\nAssessment\nRegistration\nLiasoning' },
    { type: 'experience', title: 'Funding', icon: 'fa-solid fa-hand-holding-dollar text-warning', details: 'Home Loan\nLAP\nUnsecured Business Loan\nOD/CC Facility\nPacking Credit\nBill Discount\nBuilder Finance (Construction Finance)\nForeign Funding\nPrivate Equity' },
    { type: 'experience', title: 'Legal Advisory', icon: 'fa-solid fa-scale-balanced text-danger', details: 'Income Tax Assessment\nGST Assessment\nPF Assessment\nNCLT (M & A)\nTribunal (ITAT)' }
];