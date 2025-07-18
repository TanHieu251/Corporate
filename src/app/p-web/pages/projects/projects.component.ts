import { Component } from '@angular/core';
interface Project {
  id: number;
  title: string;
  category: number;
  categoryName: string;
  location: string;
  date: string;
  image: string;
  description: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeCategory = 'all';

  // Sample project data
  projects: Project[] = [
    {
      id: 1,
      title: 'Factory Automation System',
      category: 1,
      categoryName: 'Automation',
      location: 'Ho Chi Minh City, Vietnam',
      date: 'January 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Complete automation system implementation for a manufacturing facility, improving efficiency by 35%.',
      featured: true,
    },
    {
      id: 2,
      title: 'Industrial Power Distribution',
      category: 1,
      categoryName: 'Automation',
      location: 'Hanoi, Vietnam',
      date: 'March 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Design and installation of a comprehensive power distribution system for a large industrial complex.',
      featured: true,
    },
    {
      id: 3,
      title: 'Control System Upgrade',
      category: 1,
      categoryName: 'Automation',
      location: 'Da Nang, Vietnam',
      date: 'May 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Modernization of an outdated control system for a production line, reducing downtime by 40%.',
      featured: true,
    },
    {
      id: 4,
      title: 'Warehouse Lighting Retrofit',
      category: 1,
      categoryName: 'Automation',
      location: 'Binh Duong, Vietnam',
      date: 'February 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Energy-efficient LED lighting upgrade for a 50,000 sq ft warehouse, reducing energy consumption by 60%.',
      featured: false,
    },
    {
      id: 5,
      title: 'Emergency Power System',
      category: 1,
      categoryName: 'Automation',
      location: 'Can Tho, Vietnam',
      date: 'April 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Installation of a backup power system for a critical manufacturing facility to ensure continuous operation.',
      featured: false,
    },
    {
      id: 6,
      title: 'Industrial Network Infrastructure',
      category: 1,
      categoryName: 'Automation',
      location: 'Hai Phong, Vietnam',
      date: 'June 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Design and implementation of a robust industrial network infrastructure for a smart factory.',
      featured: false,
    },
    {
      id: 7,
      title: 'SCADA System Implementation',
      category: 1,
      categoryName: 'Automation',
      location: 'Vung Tau, Vietnam',
      date: 'July 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Implementation of a SCADA system for real-time monitoring and control of industrial processes.',
      featured: false,
    },
    {
      id: 8,
      title: 'Energy Management System',
      category: 1,
      categoryName: 'Automation',
      location: 'Nha Trang, Vietnam',
      date: 'August 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Installation of an energy management system to optimize energy consumption in a manufacturing plant.',
      featured: false,
    },
    {
      id: 9,
      title: 'Motor Control Center Upgrade',
      category: 1,
      categoryName: 'Automation',
      location: 'Phu Quoc, Vietnam',
      date: 'September 2023',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      description:
        'Upgrade of a motor control center with advanced VFDs and smart controls for improved performance.',
      featured: false,
    },
  ];

  // Categories for filtering
  categories = [
    'All',
    'Automation',
    'Power Systems',
    'Control Systems',
    'Lighting',
    'Networking',
    'Energy Efficiency',
  ];

  // Testimonials data
  testimonials = [
    {
      quote:
        "The automation system implemented by ElectroPro has transformed our manufacturing process. Their team's expertise and professionalism were evident throughout the project.",
      author: 'Nguyen Van Minh',
      position: 'Production Manager, ABC Manufacturing',
    },
    {
      quote:
        'ElectroPro delivered our power distribution project on time and within budget. Their attention to detail and focus on safety were impressive. We highly recommend their services.',
      author: 'Tran Thi Lan',
      position: 'Facility Manager, XYZ Industries',
    },
    {
      quote:
        'The control system upgrade by ElectroPro has significantly improved our production efficiency. Their team was knowledgeable, responsive, and a pleasure to work with.',
      author: 'Le Thanh Hai',
      position: 'Chief Engineer, DEF Corporation',
    },
  ];

  // Process steps
  processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description:
        'We begin by understanding your requirements, challenges, and objectives through detailed discussions.',
    },
    {
      step: 2,
      title: 'Design & Planning',
      description:
        'Our engineers develop detailed designs and project plans, including timelines and resource allocation.',
    },
    {
      step: 3,
      title: 'Implementation',
      description:
        'Our skilled technicians execute the project according to the approved design, with regular progress updates.',
    },
    {
      step: 4,
      title: 'Testing & Handover',
      description:
        'We conduct thorough testing and provide comprehensive documentation and training before final handover.',
    },
  ];

  setActiveCategory(category: string): void {
    this.activeCategory = category.toLowerCase().replace(' ', '-');
  }

  getFilteredProjects(): Project[] {
    if (this.activeCategory === 'all') {
      return this.projects;
    } else {
      const categoryName = this.activeCategory.replace('-', ' ');
      return this.projects.filter(
        (project) =>
          project.categoryName.toLowerCase() === categoryName.toLowerCase()
      );
    }
  }
}
