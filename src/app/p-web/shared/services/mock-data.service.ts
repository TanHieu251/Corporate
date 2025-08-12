import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  // Products data
  products = [
    {
      id: 1,
      name: 'Cầu Dao Công Nghiệp',
      category: 'Phân Phối Điện',
      price: 1200,
      rating: 4.8,
      image: 'https://picsum.photos/seed/product1/400/300',
      description: 'Cầu dao chất lượng cao cho ứng dụng công nghiệp với các tính năng an toàn tiên tiến.',
      features: ['Bảo vệ ngắn mạch', 'Bảo vệ quá tải', 'Cài đặt ngắt có thể điều chỉnh'],
      specifications: { 'Dòng Định Mức': '100A', 'Điện Áp': '400V' },
      relatedProducts: [3, 9, 4]
    },
    {
      id: 2,
      name: 'Bộ Điều Khiển Tự Động',
      category: 'Tự Động Hóa',
      price: 2500,
      rating: 4.9,
      image: 'https://picsum.photos/seed/product2/400/300',
      description: 'Bộ điều khiển PLC tiên tiến cho hệ thống tự động hóa công nghiệp.',
      features: ['Xử lý tốc độ cao', 'Nhiều giao thức truyền thông'],
      specifications: { 'CPU': '32-bit', 'Bộ Nhớ': '8MB' },
      relatedProducts: [5, 8, 4]
    },
    {
      id: 3,
      name: 'Nguồn Điện Công Nghiệp',
      category: 'Phân Phối Điện',
      price: 850,
      rating: 4.7,
      image: 'https://picsum.photos/seed/product3/400/300',
      description: 'Bộ nguồn điện đáng tin cậy cho thiết bị và máy móc công nghiệp.',
      features: ['Hiệu suất cao', 'Bảo vệ quá tải'],
      specifications: { 'Điện Áp Vào': '85-264V AC', 'Điện Áp Ra': '24V DC' },
      relatedProducts: [1, 9, 4]
    },
    {
      id: 4,
      name: 'Bảng Điều Khiển',
      category: 'Hệ Thống Điều Khiển',
      price: 3200,
      rating: 4.6,
      image: 'https://picsum.photos/seed/product4/400/300',
      description: 'Bảng điều khiển tùy chỉnh cho máy móc và thiết bị công nghiệp.',
      features: ['Màn hình cảm ứng', 'Nhiều cổng I/O'],
      specifications: { 'Màn Hình': '10"', 'Cấp Bảo Vệ': 'IP65' },
      relatedProducts: [2, 8, 5]
    },
    {
      id: 5,
      name: 'Cảm Biến Công Nghiệp',
      category: 'Tự Động Hóa',
      price: 450,
      rating: 4.5,
      image: 'https://picsum.photos/seed/product5/400/300',
      description: 'Cảm biến độ chính xác cao cho tự động hóa và giám sát công nghiệp.',
      features: ['Độ chính xác cao', 'Nhiều tùy chọn đầu ra'],
      specifications: { 'Độ Chính Xác': '±0.1%', 'Thời Gian Phản Hồi': '<1ms' },
      relatedProducts: [2, 8, 4]
    }
  ];

  // Services data
  services = [
    {
      id: 'industrial-wiring',
      title: 'Điện Công Nghiệp',
      description: 'Giải pháp đi dây hoàn chỉnh cho nhà máy, kho và cơ sở công nghiệp với trọng tâm là an toàn và hiệu quả.',
      icon: 'zap'
    },
    {
      id: 'automation',
      title: 'Hệ Thống Tự Động',
      description: 'Thiết kế và triển khai hệ thống tự động hóa tiên tiến để cải thiện năng suất và giảm chi phí vận hành.',
      icon: 'shield'
    },
    {
      id: 'maintenance',
      title: 'Bảo Trì',
      description: 'Dịch vụ bảo trì thường xuyên và sửa chữa khẩn cấp để đảm bảo hệ thống điện của bạn hoạt động ở hiệu suất cao nhất.',
      icon: 'tool'
    }
  ];

  // Projects data
  projects = [
    {
      id: 'factory-automation',
      title: 'Tự Động Hóa Nhà Máy',
      description: 'Hệ thống tự động hóa hoàn chỉnh cho cơ sở sản xuất, cải thiện hiệu quả lên 35%.',
      image: 'https://picsum.photos/seed/project1/800/400'
    },
    {
      id: 'power-distribution',
      title: 'Phân Phối Điện',
      description: 'Thiết kế và lắp đặt hệ thống phân phối điện cho khu phức hợp công nghiệp lớn.',
      image: 'https://picsum.photos/seed/project2/800/400'
    },
    {
      id: 'control-system-upgrade',
      title: 'Nâng Cấp Hệ Thống Điều Khiển',
      description: 'Hiện đại hóa hệ thống điều khiển lỗi thời cho dây chuyền sản xuất, giảm thời gian ngừng hoạt động 40%.',
      image: 'https://picsum.photos/seed/project3/800/400'
    }
  ];

  // Team members data
  teamMembers = [
    {
      name: 'Nguyen Van Minh',
      position: 'CEO & Founder',
      image: 'https://picsum.photos/seed/team1/400/400',
      bio: 'Over 20 years of experience in industrial electrical systems.',
    },
    {
      name: 'Tran Thi Lan',
      position: 'Technical Director',
      image: 'https://picsum.photos/seed/team2/400/400',
      bio: 'Certified electrical engineer with expertise in automation.',
    },
    {
      name: 'Le Thanh Hai',
      position: 'Project Manager',
      image: 'https://picsum.photos/seed/team3/400/400',
      bio: 'Specialized in large-scale industrial projects.',
    },
    {
      name: 'Pham Van Cuong',
      position: 'Safety Officer',
      image: 'https://picsum.photos/seed/team4/400/400',
      bio: 'Ensuring compliance with safety standards and regulations.',
    },
  ];

  // Certifications data
  certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      image: 'https://picsum.photos/seed/cert1/200/200',
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management System Certification',
      image: 'https://picsum.photos/seed/cert2/200/200',
    },
    {
      name: 'OHSAS 18001:2007',
      description: 'Occupational Health and Safety Management System',
      image: 'https://picsum.photos/seed/cert3/200/200',
    },
  ];

  // Categories data
  categories = [
    'Tất Cả',
    'Phân Phối Điện',
    'Tự Động Hóa',
    'Hệ Thống Điều Khiển',
    'Đi Dây',
    'Chiếu Sáng'
  ];

  // Testimonials data
  testimonials = [
    {
      rating: 5,
      text: 'ElectroPro đã cung cấp dịch vụ xuất sắc cho dự án tự động hóa nhà máy của chúng tôi. Đội ngũ của họ chuyên nghiệp, am hiểu và hoàn thành công việc đúng thời hạn và trong ngân sách.',
      author: 'Nguyễn Văn Minh',
      position: 'Quản Lý Sản Xuất, ABC Manufacturing'
    },
    {
      rating: 5,
      text: 'Chúng tôi đã làm việc với ElectroPro hơn 5 năm cho tất cả nhu cầu bảo trì điện. Thời gian phản hồi của họ rất tốt, và các kỹ thuật viên rất có tay nghề.',
      author: 'Trần Thị Lan',
      position: 'Quản Lý Cơ Sở, XYZ Industries'
    },
    {
      rating: 5,
      text: 'Hệ thống phân phối điện được thiết kế bởi ElectroPro đã cải thiện đáng kể hiệu quả năng lượng của chúng tôi. Cách tiếp cận đổi mới và chú ý đến chi tiết của họ khiến họ khác biệt với các nhà thầu khác.',
      author: 'Lê Thanh Hải',
      position: 'Kỹ Sư Trưởng, DEF Corporation'
    }
  ];




  // Get featured products (first 3 products)
  getFeaturedProducts() {
    return this.products.slice(0, 3);
  }

  // Get product by ID
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  // Get related products
  getRelatedProducts(productId: number) {
    const product = this.getProductById(productId);
    if (product && product.relatedProducts) {
      return this.products.filter((p) =>
        product.relatedProducts.includes(p.id)
      );
    }
    return [];
  }
}
