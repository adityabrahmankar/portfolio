"use client";

import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface SnippetCardProps {
  snippets: {
    title: string;
    description: string;
    component: FC | ((props: any) => ReactElement);
  };
}

const SnippetCard = ({ snippets }: SnippetCardProps) => {
  return (
    <>
      <motion.div
        key={snippets.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full gap-2 p-3 text-white rounded-md select-none bg-gray-700/10"
      >
        <h2 className="text-2xl font-semibold">{snippets.title}</h2>
        <p className="text-muted-foreground">
          {snippets.description.split(".")[0]}
        </p>
        <div className="w-full max-h-[500px] p-3">
          <Tabs className="" defaultValue="preview">
            <TabsList className="gap-2 bg-gray-700/10">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <div className="relative w-full max-h-[500px] p-3 rounded-lg bg-zinc-900 min-h-[150px] flex items-center justify-center">
                {<snippets.component key={0} />}
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="relative w-full max-h-[500px] p-3 rounded-lg bg-zinc-900 min-h-[150px] flex items-center justify-center">
                Code for cryptText
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default SnippetCard;
