import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function createProgressMap(
    req: Request,
    res: Response
): Promise<void> {
    const { courseInstanceId, studentIds, modules } = req.body;
    console.log("Original Request body:", req.body);

    try {
        interface Module {
            moduleId: string;
            sequence: number;
            sections: Section[];
        }

        interface Section {
            sectionId: string;
            sequence: number;
            sectionItems: SectionItem[];
        }

        interface SectionItem {
            sectionItemId: string;
            sequence: number;
        }

        const { courseInstanceId, studentIds, modules }: { 
            courseInstanceId: string; 
            studentIds: string[]; 
            modules: Module[] 
        } = req.body;

        // const newProgress = await prisma.progressMap.create({
        //     data: {
        //         courseInstanceId,
        //         studentIds,
        //         modules: {
        //             create: modules.map((module: Module) => ({
        //                 moduleId: module.moduleId,
        //                 sequence: module.sequence,
        //                 isCompleted: false, // Initially set to incomplete
        //                 sections: {
        //                     create: module.sections.map((section: Section) => ({
        //                         sectionId: section.sectionId,
        //                         sequence: section.sequence,
        //                         isCompleted: false, // Initially set to incomplete
        //                         sectionItems: {
        //                             create: section.sectionItems.map((item: SectionItem) => ({
        //                                 sectionItemId: item.sectionItemId,
        //                                 sequence: item.sequence,
        //                                 isCompleted: false // Initially set to incomplete
        //                             })),
        //                         },
        //                     })),
        //                 },
        //             })),
        //         },
        //     },
        // });

        // res.json(newProgress);
    } catch (error) {
        console.error("Failed to create progress:", error);
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        res.status(500).send({ message: `Error creating progress: ${errorMessage}` });
    }
}

// Additional functionality like updating the completion status can be added in similar functions.
