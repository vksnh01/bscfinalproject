import NDLI from '../../ImgFolder/National-Digital-Library.jpg';
import internetArchive from '../../ImgFolder/internetArchive.png'
import dpla from '../../ImgFolder/dpla-logo.jpg'
import jstor from '../../ImgFolder/jstor.png'
import dli from '../../ImgFolder/dli.jpg'
import beap from '../../ImgFolder/beap.jpg'
import ias from '../../ImgFolder/ias.jpg'
import muse from '../../ImgFolder/project muse.jpg'
import openLibrary from '../../ImgFolder/openLib.png'


const data = [
    {
      id: 1,
      img:NDLI,
      title: "National Digital Library of India (NDLI)",
      link: "https://ndl.iitkgp.ac.in/",
      first:"The ",
      linkName:"National Digital Library of India (NDLI) ",
      desc:`is a project initiated by the Ministry of Human Resource Development, Government of India, to provide free access to digital educational resources for all citizens. 
      It aims to develop a comprehensive digital library that can be accessed from anywhere in the world. The NDLI provides open access to a variety of content such as books, journals, manuscripts, audio-visual materials and more.
      This library is designed specifically for students and teachers with an easy-to-use interface and powerful search capabilities. It also offers various tools such as online quizzes, discussion forums and learning management systems which help facilitate learning.
      The NDLI is currently available in seven Indian languages – English, Hindi, Tamil, Telugu, Malayalam Kannada and Gujarati – making it accessible to millions of students across the country.`,
    },
    {
      id: 2,
      img:dli,
      title: "Digital Library of India (DLI)",
      link: "https://web.archive.org/web/20160229163832/http://www.dli.gov.in/",
      first:"The ",
      linkName:"Digital Library of India (DLI) ",
      desc:`is a project initiated by the Ministry of Human Resource Development, Government of India, to provide free access to digital resources. It is an online platform that provides access to digital books, manuscripts, and images from various cultural heritage institutions across the country.
  
      The DLI has established partnerships with several institutions in order to digitize and preserve cultural heritage materials such as rare manuscripts and ancient texts. It also makes these materials available for research purposes as well as for public use.
      
       The DLI provides an easy-to-use interface with powerful search capabilities which make it easy for users to find the information they need quickly and easily. It also offers a range of tools such as online quizzes and discussion forums that can help facilitate learning.`
  
    },
    {
      id: 3,
      img:beap,
      title: "British Library and institutions (BEAP)",
      link: "https://eap.bl.uk/",
      first:"The",
      linkName:"British Library and institutions",
      desc:`The  in India collaborated on the British Library Endangered Archives Programme (BEAP) to digitise and conserve at-risk materials. The programme collaborates with Indian archive institutions to digitise manuscripts, photos, recordings, and other research-critical artefacts that are in danger of being lost owing to abuse or damage.
  
      The BEAP offers financial support for initiatives that assist in digitising endangered archives and making them accessible online via its website. 
      
      This gives academics from all around the world simple access to these priceless resources and protects them for upcoming generations. The BEAP also collaborates with regional groups to educate people about their cultural history and how to preserve it.`
    },
    {
      id: 4,
      img:ias,
      title: "Indian Academy of Sciences",
      link: "https://www.ias.ac.in/",
      first:"The ",
      linkName:"Indian Academy of Sciences ",
      desc:`is one of the premier scientific institutions in India, founded in 1934 with the aim of promoting the advancement of science in India. The academy is headquartered in Bengaluru and has three major branches, including the Indian National Science Academy, the National Academy of Sciences India, and the Academy of Sciences for the Developing World.
      The digital library of the Indian Academy of Sciences is a valuable resource for scientists, researchers, and students alike. It contains a vast collection of scientific publications covering various fields of science, including physics, chemistry, mathematics, biology, and more. The library is regularly updated with new research articles, journals, and conference proceedings from all over the world.
      The Indian Academy of Sciences provides access to its digital library to both members and non-members. However, members of the academy enjoy additional benefits, such as access to exclusive publications, reduced subscription rates, and eligibility to apply for fellowships and awards.
      The digital library of the Indian Academy of Sciences is user-friendly and easy to navigate. Users can search for publications by title, author, keyword, or subject. The library also provides options to download articles and publications in PDF format, making it easy to access and read research papers on any device.
      In addition to the digital library, the Indian Academy of Sciences also organizes conferences, workshops, and seminars to promote scientific research and collaboration among scientists. It also awards fellowships and prizes to outstanding researchers in various fields of science.`
    },
    {
      id: 5,
      img:jstor,
      title: "JSTOR",
      link: "https://www.jstor.org/",
      // first:"",
      linkName:"JSTOR",
      desc:` is a widely known digital library that provides access to a vast array of scholarly content, including books, journals, and primary sources. The library is a not-for-profit organization that was founded in 1995 to help support academic research and teaching. 
  
      It has partnerships with several institutions in India, including the Indian Council of Historical Research, the Indian Academy of Sciences, and the Indian Institute of Science Education and Research. These partnerships allow JSTOR to offer local content and make it accessible to researchers and scholars in India.
      
      JSTOR’s collection includes more than 12 million academic articles, books, and primary sources, covering a broad range of subjects such as humanities, social sciences, and sciences. 
      
      The platform is designed to support academic research and provides a powerful search engine that enables users to find relevant articles and materials quickly. JSTOR also provides tools for researchers to analyze and manage their research, including citation tracking, bibliographic management, and the ability to save and share articles.
      
      The library is available to individuals and institutions, and its content is accessible through subscription or pay-per-view. JSTOR offers a variety of subscription options for academic institutions, including access to specific subject collections or the entire JSTOR archive.
      
      Individual researchers can also subscribe to JSTOR on a monthly or annual basis. JSTOR also offers a program for people who cannot afford access to its content called the Register & Read program, which allows users to read a limited number of articles online for free each month.`
    },
    {
      id: 6,
      img:muse,
      title: "Project MUSE",
      link: "https://muse.jhu.edu/",
      first:"Project",
      linkName:" MUSE ",
      desc:`is an online database of scholarly articles and books in the humanities and social sciences. It is a not-for-profit project developed by Johns Hopkins University Press and was initially launched in 1995. 
      The library offers access to thousands of scholarly journals, books, and primary sources in various fields, including literature, history, anthropology, political science, and many more.
      One of the notable features of Project MUSE is its emphasis on content from independent and not-for-profit publishers. This allows scholars and researchers to access valuable research from smaller publishers who may not have the resources to promote their content widely. 
      Additionally, Project MUSE has partnerships with several institutions in India to provide access to local content, making it an essential resource for Indian scholars and researchers.
      The library’s content is available in both PDF and HTML formats, and users can search for articles and books by author, title, subject, or keyword. Project MUSE also offers a range of tools for researchers, including citation export and annotation features.
      Users can access Project MUSE through institutional subscriptions, or individual users can purchase articles and books on a pay-per-view basis.`
    },
    {
      id: 7,
      img:openLibrary,
      title: "Open Library",
      link: "https://openlibrary.org/",
      first:"",
      linkName:"Open Library ",
      desc:`is a non-profit digital library that aims to provide free and open access to millions of books. The library operates as a project of the Internet Archive, a non-profit digital library with a mission to provide universal access to all knowledge. 
  
      Open Library relies on a network of volunteers who help to digitize and upload books to the platform.
      Users can search for books by author, title, or subject, and can also browse curated collections, such as the “Classics” or “Science Fiction” collections. Once a book is found, it can be borrowed for a period of two weeks. The library also offers a feature to create a personalized digital bookshelf, where users can save and organize their favorite titles.
      
      In addition to offering free access to ebooks, Open Library also has a physical book lending program, where users can borrow books from participating libraries. The platform also provides APIs for developers to access and use the library’s data, making it a valuable resource for researchers, educators, and developers. 
      
      Overall, Open Library is a great resource for anyone looking to access and read books online, completely for free.`
    },
    {
      id: 8,
      img:dpla,
      title: "Digital Public Library of America",
      link: "https://dp.la/",
      first:"The ",
      linkName:"Digital Public Library of America (DPLA) ",
      desc:`is a non-profit, collaborative digital library initiative that aims to make the cultural and scientific heritage of humanity available to everyone, free of charge. 
  
      It was launched in 2013 and has grown into a vast collection of resources contributed by a range of institutions, including libraries, museums, and archives.
      
      The DPLA offers access to over 40 million digital resources, including books, images, maps, and videos, and provides a single point of access to collections from institutions across the United States. In addition to the collections from US institutions, the DPLA also has partnerships with several institutions in India to offer local content.
      
      The DPLA’s collections are available for anyone to use, and the platform provides tools for searching and exploring the content. The DPLA also offers a range of educational resources and tools to support teaching and learning, including lesson plans and activities for educators.
      
      One of the unique aspects of the DPLA is its commitment to open access and promoting the use of digital resources for research and education. The DPLA works to make its collections freely available and to promote the use of open standards and technologies for digital library initiatives.`
    },
    {
      id: 9,
      img:internetArchive,
      title: "Internet Archive",
      link: "https://archive.org/",
      first:"The",
      linkName:" Internet Archive ",
      desc:`is a non-profit digital library that aims to provide universal access to knowledge. It was founded in 1996 by Brewster Kahle and is based in San Francisco, California. The archive’s mission is to preserve cultural artifacts and provide open access to digital content, including books, movies, music, and websites.
  
      The library has a vast collection of over 70 petabytes of digital content, including over 40 million books and texts, 5 million audio recordings, 4 million videos, and 5 billion archived web pages. The content is available for free to the public, and the archive’s digitization efforts are supported by donations from individuals, institutions, and governments.`
    },
  
  ];
  export default data;