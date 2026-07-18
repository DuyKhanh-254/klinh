export type Assignment = {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fileType: "PDF";
  originalFileName: string;
  fileSize: string;
  pages: number;
  previewImage: string;
  downloadPath: string;
  viewerPath: string;
  tools: string[];
  skills: string[];
  theme: "strawberry" | "cherry" | "flower" | "cloud" | "star" | "heart";
  takeaway: string;
};

export const assignments: Assignment[] = [
  {
    id: 1,
    slug: "thao-tac-tap-tin-thu-muc",
    number: "01",
    title: "Thao tác cơ bản với tập tin và thư mục",
    subtitle: "Thực hành File Explorer trên Windows",
    description:
      "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp trong cấu trúc thư mục cá nhân.",
    fileType: "PDF",
    originalFileName: "Bài 1.pdf",
    fileSize: "666 KB",
    pages: 12,
    previewImage: "/images/assignments/assignment-1.webp",
    downloadPath: "/downloads/assignment-1.pdf",
    viewerPath: "/downloads/assignment-1.pdf",
    tools: ["Windows", "File Explorer"],
    skills: ["Quản lý tệp", "Tổ chức dữ liệu"],
    theme: "strawberry",
    takeaway: "Một hệ thống thư mục rõ ràng là nền móng của thói quen học tập số gọn gàng.",
  },
  {
    id: 2,
    slug: "tim-kiem-thong-tin-hoc-thuat",
    number: "02",
    title: "Tìm kiếm, thu thập và đánh giá nguồn thông tin học thuật",
    subtitle: "Nghiên cứu CLT trong giảng dạy tiếng Hàn",
    description:
      "Tìm kiếm tài liệu về phương pháp giảng dạy giao tiếp, so sánh nguồn và đánh giá độ tin cậy theo các tiêu chí học thuật.",
    fileType: "PDF",
    originalFileName: "Bài 2.pdf",
    fileSize: "123 KB",
    pages: 4,
    previewImage: "/images/assignments/assignment-2.webp",
    downloadPath: "/downloads/assignment-2.pdf",
    viewerPath: "/downloads/assignment-2.pdf",
    tools: ["Google Scholar", "ERIC", "Scopus", "SpringerLink"],
    skills: ["Tìm kiếm học thuật", "Đánh giá nguồn", "Trích dẫn"],
    theme: "cherry",
    takeaway: "Nguồn đáng tin cậy cần được kiểm tra qua tác giả, nhà xuất bản, phản biện và mức độ liên quan.",
  },
  {
    id: 3,
    slug: "thuc-hanh-prompt-chuong-3",
    number: "03",
    title: "Báo cáo thực hành bài tập số 2 chương 3",
    subtitle: "Thiết kế prompt từ cơ bản đến nâng cao",
    description:
      "So sánh ba cấp độ prompt cho tác vụ tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập, rồi phân tích hiệu quả đầu ra.",
    fileType: "PDF",
    originalFileName: "Bài 3.pdf",
    fileSize: "811 KB",
    pages: 5,
    previewImage: "/images/assignments/assignment-3.webp",
    downloadPath: "/downloads/assignment-3.pdf",
    viewerPath: "/downloads/assignment-3.pdf",
    tools: ["ChatGPT", "Gemini"],
    skills: ["Prompting", "So sánh đầu ra", "Tư duy phản biện"],
    theme: "flower",
    takeaway: "Bối cảnh, vai trò và ràng buộc cụ thể giúp AI tạo kết quả rõ ràng, đúng mục tiêu hơn.",
  },
  {
    id: 4,
    slug: "cong-cu-hop-tac-truc-tuyen",
    number: "04",
    title: "Báo cáo cá nhân: Sử dụng công cụ hợp tác trực tuyến",
    subtitle: "Phối hợp nhóm với Trello, Google Docs và Slack",
    description:
      "Mô tả cách một nhóm bốn thành viên phân công, cùng soạn thảo và trao đổi trong dự án về chế định đồng phạm.",
    fileType: "PDF",
    originalFileName: "bài 4.pdf",
    fileSize: "92 KB",
    pages: 4,
    previewImage: "/images/assignments/assignment-4.webp",
    downloadPath: "/downloads/assignment-4.pdf",
    viewerPath: "/downloads/assignment-4.pdf",
    tools: ["Trello", "Google Docs", "Slack"],
    skills: ["Hợp tác trực tuyến", "Quản lý tiến độ", "Giao tiếp nhóm"],
    theme: "cloud",
    takeaway: "Công cụ chỉ phát huy hiệu quả khi nhóm có quy ước rõ về nhiệm vụ, cập nhật và phản hồi.",
  },
  {
    id: 5,
    slug: "ai-tao-sinh-sang-tao-noi-dung",
    number: "05",
    title: "Ứng dụng AI tạo sinh trong sáng tạo nội dung số",
    subtitle: "Thiết kế infographic kỹ năng sinh viên thời đại AI",
    description:
      "Kết hợp AI tạo văn bản, tạo hình và công cụ thiết kế để xây dựng infographic, đồng thời đánh giá ưu điểm và hạn chế.",
    fileType: "PDF",
    originalFileName: "Bài 5.pdf",
    fileSize: "3.0 MB",
    pages: 10,
    previewImage: "/images/assignments/assignment-5.webp",
    downloadPath: "/downloads/assignment-5.pdf",
    viewerPath: "/downloads/assignment-5.pdf",
    tools: ["ChatGPT", "DALL-E", "Canva"],
    skills: ["Sáng tạo nội dung", "Thiết kế infographic", "Đánh giá AI"],
    theme: "star",
    takeaway: "AI rút ngắn thời gian thử nghiệm, còn con người chịu trách nhiệm chọn lọc, chỉnh sửa và hoàn thiện ý tưởng.",
  },
  {
    id: 6,
    slug: "ai-co-trach-nhiem",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subtitle: "Liêm chính học thuật, kiểm chứng và trách nhiệm",
    description:
      "Phân tích định hướng sử dụng AI trong giáo dục, thực hành kiểm chứng đầu ra và xây dựng bộ nguyên tắc cá nhân.",
    fileType: "PDF",
    originalFileName: "bài 6pdf.pdf",
    fileSize: "852 KB",
    pages: 7,
    previewImage: "/images/assignments/assignment-6.webp",
    downloadPath: "/downloads/assignment-6.pdf",
    viewerPath: "/downloads/assignment-6.pdf",
    tools: ["AI tạo sinh", "Nguồn học thuật", "Văn bản chính thống"],
    skills: ["Liêm chính học thuật", "Kiểm chứng", "Đạo đức AI"],
    theme: "heart",
    takeaway: "AI là công cụ hỗ trợ. Người học vẫn phải kiểm chứng, minh bạch và giữ tư duy độc lập.",
  },
];

export const getAssignment = (id: number) => assignments.find((item) => item.id === id);
