-- CreateTable
CREATE TABLE "ProgressMap" (
    "id" SERIAL NOT NULL,
    "courseInstanceId" TEXT NOT NULL,
    "studentIds" TEXT[],
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProgressMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "progressMapId" INTEGER NOT NULL,
    "moduleId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "sectionId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionItem" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "sectionItemId" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SectionItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_progressMapId_fkey" FOREIGN KEY ("progressMapId") REFERENCES "ProgressMap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionItem" ADD CONSTRAINT "SectionItem_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
