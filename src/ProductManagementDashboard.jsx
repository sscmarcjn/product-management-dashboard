import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockSalesData = [
  { name: "Jan", sales: 2400 },
  { name: "Feb", sales: 1398 },
  { name: "Mar", sales: 9800 },
  { name: "Apr", sales: 3908 },
  { name: "May", sales: 4800 },
];

const products = [
  { name: "Product Alpha", owner: "Jane Doe", launch: "2024-05-01" },
  { name: "Product Beta", owner: "John Smith", launch: "2024-08-15" },
];

export default function ProductManagementDashboard() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Product Management Portal</h1>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to the PM Portal</h2>
              <p>Use the tabs to manage your products, documentation, and analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <div className="grid gap-4">
            {products.map((product, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p>Owner: {product.owner}</p>
                  <p>Launch Date: {product.launch}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roadmap">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Product Roadmap</h2>
              <p>Timeline view coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Documentation</h2>
              <Input placeholder="Search docs..." className="mb-4" />
              <p>Markdown editor and file uploads to be added.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Sales Analytics</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockSalesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
