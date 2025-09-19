import foodDonationImg from "@/assets/food-donation.jpg";
import clothingDonationImg from "@/assets/clothing-donation.jpg";
import schoolSuppliesImg from "@/assets/school-supplies.jpg";

export interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  type: "offering" | "requesting";
  resource?: {
    type: string;
    title: string;
    description: string;
    url: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  createdAt: Date;
}

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Maria Rodriguez",
      username: "mariar",
      avatar: "MR"
    },
    timestamp: "2h",
    content: "Our community food bank is hosting a weekend drive! 🍎 We're collecting non-perishable items, fresh produce, and canned goods. Every donation helps feed local families in need. Let's come together and make a difference! #CommunitySupport #FoodSecurity",
    image: foodDonationImg,
    type: "offering",
    resource: {
      type: "Event",
      title: "Weekend Community Food Drive",
      description: "Join us for a community food collection drive. All non-perishable items welcome. Saturday 9AM-5PM at Central Community Center.",
      url: "example.com"
    },
    engagement: {
      likes: 324,
      comments: 28,
      shares: 67
    },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: "2", 
    author: {
      name: "James Thompson",
      username: "jameshelps",
      avatar: "JT"
    },
    timestamp: "4h",
    content: "Winter is coming and many people need warm clothes! 🧥 Our annual clothing donation drive is collecting coats, sweaters, blankets, and winter gear. Clean, gently used items make such a huge difference in someone's life. Spread the word! ❄️",
    image: clothingDonationImg,
    type: "offering",
    resource: {
      type: "Campaign",
      title: "Winter Clothing Donation Drive",
      description: "Help keep our community warm this winter. Accepting coats, sweaters, blankets, hats, and gloves. Drop-off locations available citywide.",
      url: "example.com"
    },
    engagement: {
      likes: 456,
      comments: 39,
      shares: 82
    },
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000)
  },
  {
    id: "3",
    author: {
      name: "Sarah Chen",
      username: "sarahcares", 
      avatar: "SC"
    },
    timestamp: "6h",
    content: "Looking for school supplies for my kids and their classmates 📚✏️ Starting the new school year is expensive, and many families in our neighborhood could use help with backpacks, notebooks, pencils, and other essentials. Any donations would be deeply appreciated!",
    image: schoolSuppliesImg,
    type: "requesting",
    resource: {
      type: "Request",
      title: "Back-to-School Supply Drive Needed",
      description: "Seeking school supplies for children in the neighborhood. Backpacks, notebooks, pencils, erasers, and other school essentials needed.",
      url: "example.com"
    },
    engagement: {
      likes: 189,
      comments: 15,
      shares: 42
    },
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000)
  },
  {
    id: "4",
    author: {
      name: "Michael Davis",
      username: "mikedgiving",
      avatar: "MD"
    },
    timestamp: "8h",
    content: "Our family is hosting a toy drive for the holidays! 🎁 We have gently used toys, books, and games that we'd love to share with families who need them. Perfect condition items ready for new homes. Let me know if you're interested!",
    type: "offering",
    engagement: {
      likes: 267,
      comments: 22,
      shares: 58
    },
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
  },
  {
    id: "5",
    author: {
      name: "Jennifer Liu",
      username: "jenliu_help",
      avatar: "JL"
    },
    timestamp: "12h",
    content: "Single mom here looking for help with groceries this week 🛒 Lost my job recently and struggling to put food on the table for my two young kids. Any assistance with non-perishables or gift cards would mean the world to us. #CommunitySupport",
    type: "requesting",
    resource: {
      type: "Urgent Need",
      title: "Grocery Assistance Needed",
      description: "Family in need of grocery assistance. Non-perishable items and gift cards to local stores would be greatly appreciated.",
      url: "example.com"
    },
    engagement: {
      likes: 523,
      comments: 67,
      shares: 156
    },
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
  },
  {
    id: "6",
    author: {
      name: "Robert Wilson",
      username: "robwilson_tech",
      avatar: "RW"
    },
    timestamp: "1d",
    content: "I have several old laptops and tablets that still work great! 💻 Perfect for students or anyone who needs a computer. All have been factory reset and are ready to go. Free to good homes - just want to see them put to good use!",
    type: "offering",
    resource: {
      type: "Tech Donation",
      title: "Free Laptops & Tablets Available",
      description: "Working laptops and tablets available for students and families in need. All devices have been reset and are ready for use.",
      url: "example.com"
    },
    engagement: {
      likes: 378,
      comments: 45,
      shares: 91
    },
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
  }
];