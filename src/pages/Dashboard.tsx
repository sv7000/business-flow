import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartPieIcon, CashIcon, UserGroupIcon, PhoneIcon, ShoppingCartIcon, 
  TruckIcon, OfficeBuildingIcon, DocumentIcon, ScaleIcon, VideoCameraIcon,
  CogIcon, ClipboardListIcon, ChartBarIcon, LockClosedIcon, HomeIcon
} from '@heroicons/react/outline';

const modules = [
  { id: 'inventory', name: 'Inventory', icon: ChartPieIcon, color: 'bg-blue-500' },
  { id: 'finance', name: 'Finance', icon: CashIcon, color: 'bg-green-500' },
  { id: 'employee', name: 'Employee', icon: UserGroupIcon, color: 'bg-yellow-500' },
  { id: 'crm', name: 'CRM', icon: PhoneIcon, color: 'bg-purple-500' },
  { id: 'sales', name: 'Sales & Marketing', icon: ShoppingCartIcon, color: 'bg-red-500' },
  { id: 'supplier', name: 'Supplier & Vendor', icon: TruckIcon, color: 'bg-indigo-500' },
  { id: 'frontoffice', name: 'Front Office', icon: OfficeBuildingIcon, color: 'bg-pink-500' },
  { id: 'document', name: 'Document', icon: DocumentIcon, color: 'bg-gray-500' },
  { id: 'legal', name: 'Legal & Compliance', icon: ScaleIcon, color: 'bg-yellow-600' },
  { id: 'workspace', name: 'Virtual Workspace', icon: VideoCameraIcon, color: 'bg-blue-600' },
  { id: 'manufacturing', name: 'Manufacturing', icon: CogIcon, color: 'bg-green-600' },
  { id: 'project', name: 'Project & Tasks', icon: ClipboardListIcon, color: 'bg-purple-600' },
  { id: 'analytics', name: 'Business Intelligence', icon: ChartBarIcon, color: 'bg-red-600' },
  { id: 'security', name: 'Security', icon: LockClosedIcon, color: 'bg-indigo-600' },
  { id: 'facility', name: 'Facility Management', icon: HomeIcon, color: 'bg-pink-600' },
];

const Dashboard: React.FC = () => {
  const [activeModule, setActiveModule] = useState(modules[0].id);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Company logo" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Add navigation items here */}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {/* Add user menu here */}
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="flex flex-wrap -mx-2">
                {modules.map((module) => (
                  <motion.div
                    key={module.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full h-24 rounded-lg shadow-md flex flex-col items-center justify-center transition-colors duration-300 ${
                        activeModule === module.id ? module.color + ' text-white' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <module.icon className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">{module.name}</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-lg rounded-lg p-6"
                >
                  <h2 className="text-2xl font-bold mb-4">{modules.find(m => m.id === activeModule)?.name}</h2>
                  {/* Content for each module */}
                  {activeModule === 'inventory' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Assets and Products</h3>
                      {/* Add inventory management components here */}
                    </div>
                  )}
                  {activeModule === 'finance' && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Financial Overview</h3>
                      {/* Add finance management components here */}
                    </div>
                  )}
                  {/* Add similar sections for other modules */}
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;