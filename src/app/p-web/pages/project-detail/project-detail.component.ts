import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Project {
  id: number;
  name: string;
  categoryName: string;
  location: string;
  date: string;
  client: string;
  duration: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  relatedProjects: number[];
}

@Component({
  selector: 'app-project-detail',
  standalone: false,

  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  project: Project | undefined;
  relatedProjects: Project[] = [];

  // Sample project data
  projects: Project[] = [
    {
      id: 1,
      name: 'Factory Automation System',
      categoryName: 'Automation',
      location: 'Ho Chi Minh City, Vietnam',
      date: 'January 2023',
      client: 'ABC Manufacturing',
      duration: '3 months',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      ],
      description:
        "Complete automation system implementation for a manufacturing facility, improving efficiency by 35%. The project involved designing and installing a comprehensive automation solution for the client's production lines.",
      challenge:
        'The client was facing significant inefficiencies in their manufacturing process, with high labor costs and inconsistent product quality. Their existing semi-automated system was outdated and prone to frequent breakdowns, causing production delays.',
      solution:
        'We designed and implemented a state-of-the-art automation system that included PLC controllers, HMI interfaces, and a SCADA system for real-time monitoring. The solution integrated seamlessly with existing equipment while adding new automated components to critical production stages.',
      results: [
        '35% increase in overall production efficiency',
        '40% reduction in production errors',
        '50% decrease in downtime due to equipment failures',
        'ROI achieved within 14 months of implementation',
      ],
      testimonial: {
        quote:
          "The automation system implemented by ElectroPro has transformed our manufacturing process. Their team's expertise and professionalism were evident throughout the project.",
        author: 'Nguyen Van Minh',
        position: 'Production Manager, ABC Manufacturing',
      },
      relatedProjects: [3, 7, 9],
    },
    {
      id: 2,
      name: 'Industrial Power Distribution',
      categoryName: 'Power Systems',
      location: 'Hanoi, Vietnam',
      date: 'March 2023',
      client: 'XYZ Industries',
      duration: '4 months',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      ],
      description:
        'Design and installation of a comprehensive power distribution system for a large industrial complex. The project included high and low voltage distribution systems, transformers, and backup power solutions.',
      challenge:
        'The client was expanding their industrial facility and needed a reliable power distribution system that could handle their increased power requirements while ensuring safety and compliance with regulations.',
      solution:
        'We designed a comprehensive power distribution system that included primary and secondary substations, transformers, switchgear, and distribution panels. The system was designed with redundancy to ensure continuous operation and included advanced protection mechanisms.',
      results: [
        '99.9% power reliability achieved',
        '30% capacity for future expansion built into the system',
        '20% energy efficiency improvement compared to the previous system',
        'Full compliance with all safety regulations and standards',
      ],
      testimonial: {
        quote:
          'ElectroPro delivered our power distribution project on time and within budget. Their attention to detail and focus on safety were impressive. We highly recommend their services.',
        author: 'Tran Thi Lan',
        position: 'Facility Manager, XYZ Industries',
      },
      relatedProjects: [5, 9, 3],
    },
    {
      id: 3,
      name: 'Control System Upgrade',
      categoryName: 'Control Systems',
      location: 'Da Nang, Vietnam',
      date: 'May 2023',
      client: 'DEF Corporation',
      duration: '2 months',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      ],
      description:
        'Modernization of an outdated control system for a production line, reducing downtime by 40%. The project involved replacing legacy control systems with modern, programmable solutions.',
      challenge:
        "The client's production line was using an outdated control system that was becoming increasingly difficult to maintain due to obsolete components and lack of technical support. Frequent failures were causing significant production downtime.",
      solution:
        "We implemented a phased upgrade approach to minimize disruption to production. The new control system featured modern PLCs, touchscreen HMIs, and integrated remote monitoring capabilities. We also provided comprehensive documentation and training for the client's maintenance team.",
      results: [
        '40% reduction in production downtime',
        '25% increase in production line speed',
        'Improved troubleshooting capabilities with advanced diagnostics',
        'Enhanced data collection for production analytics',
      ],
      testimonial: {
        quote:
          'The control system upgrade by ElectroPro has significantly improved our production efficiency. Their team was knowledgeable, responsive, and a pleasure to work with.',
        author: 'Le Thanh Hai',
        position: 'Chief Engineer, DEF Corporation',
      },
      relatedProjects: [1, 9, 8],
    },
    // Additional projects would be defined here
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = Number(params.get('id'));
      this.project = this.projects.find((p) => p.id === 1);

      if (this.project && this.project.relatedProjects) {
        this.relatedProjects = this.projects.filter((p) =>
          this.project?.relatedProjects.includes(p.id)
        );
      }
    });
  }
}
