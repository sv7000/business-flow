"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRightIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    author: "",
    category: "",
  });

  const categories = ["All", "Technology", "Business", "Design", "Marketing"];

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt:
        "Explore how artificial intelligence is reshaping the business landscape and what it means for your company.",
      author: "John Doe",
      date: "May 15, 2024",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Effective Strategies for Remote Team Management",
      excerpt:
        "Learn the best practices for managing and motivating remote teams in the post-pandemic world.",
      author: "Jane Smith",
      date: "May 10, 2024",
      category: "Business",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "The Power of User-Centered Design",
      excerpt:
        "Discover how focusing on user experience can dramatically improve your product's success.",
      author: "Mike Johnson",
      date: "May 5, 2024",
      category: "Design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Leveraging Social Media for B2B Marketing",
      excerpt:
        "Uncover strategies to effectively use social media platforms for B2B marketing and lead generation.",
      author: "Sarah Brown",
      date: "April 30, 2024",
      category: "Marketing",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (value: string) => {
    setNewPost({ ...newPost, category: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const newBlogPost = {
      id: blogPosts.length + 1,
      ...newPost,
      date: formattedDate,
      image: "/placeholder.svg?height=400&width=600",
    };
    setBlogPosts([newBlogPost, ...blogPosts]);
    setNewPost({ title: "", excerpt: "", author: "", category: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with the latest insights, trends, and expert opinions
            in technology, business, and more.
          </motion.p>
        </div>
      </section>

      {/* Category Filter and Add New Post Button */}
      <section className="py-8 bg-background shadow">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                } transition duration-300`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="ml-4">
                  <PlusIcon className="mr-2 h-4 w-4" /> Add New Post
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Blog Post</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    required
                  />
                  <Textarea
                    name="excerpt"
                    placeholder="Excerpt"
                    value={newPost.excerpt}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="author"
                    placeholder="Author"
                    value={newPost.author}
                    onChange={handleInputChange}
                    required
                  />
                  <Select onValueChange={handleCategoryChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        .filter((category) => category !== "All")
                        .map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <Button type="submit">Add Post</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <TagIcon className="h-4 w-4 mr-1" />
                    <span>{post.category}</span>
                  </div>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Read More
                    <ChevronRightIcon className="h-5 w-5 ml-1" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-card rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Stay up-to-date with our latest articles and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
