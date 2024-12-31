"use client";

import { MainSidebar } from "@/components/MainSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
export default function DashboardPage() {
  return (
    <SidebarProvider className="mt-16">
      <MainSidebar className="mt-20  " />
      <SidebarInset className="">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/Dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6">
          {/* Overview Section */}
          <section className="grid gap-6 md:grid-cols-4">
            <div className="rounded-xl bg-muted/50 p-4">
              Overview Card 1 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laboriosam excepturi fugit culpa, non maiores possimus! Quam
              magni possimus minus. Repudiandae sint deleniti fuga laborum
              ducimus, velit sapiente corporis exercitationem illum vel omnis?
            </div>
            <div className="rounded-xl bg-muted/50 p-4">Overview Card 2</div>
            <div className="rounded-xl bg-muted/50 p-4">Overview Card 3</div>
            <div className="rounded-xl bg-muted/50 p-4">Overview Card 4</div>
          </section>

          {/* Recent Activity Section */}
          <section className="rounded-xl bg-muted/50 p-4">
            Recent Activity Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Modi quis suscipit dicta eius? Corporis impedit aut a, neque
            odit rem perspiciatis soluta cumque in quisquam rerum sint nostrum
            nobis architecto. Cum iusto ipsum illo incidunt deleniti, accusamus
            quis, commodi esse velit inventore quisquam odio cupiditate eum
            labore itaque necessitatibus officia! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolore quidem optio eos tempore. Quae
            inventore eveniet aliquam. Repellendus accusamus recusandae
            accusantium earum, ea, quae vel autem officia maiores mollitia ullam
            architecto doloremque obcaecati odit iusto aperiam soluta distinctio
            eos reiciendis tempora illum vero magnam voluptatibus
            exercitationem. Itaque non tempora eius modi asperiores nobis ipsa
            eligendi iure aliquid corrupti odit blanditiis illo quibusdam vel
            fuga totam, vitae accusamus doloremque harum iste amet reiciendis
            laboriosam at consectetur. Odit tenetur corrupti recusandae,
            cupiditate esse officia adipisci eligendi voluptas dolores culpa
            alias deserunt consequuntur eaque velit quis atque molestiae! Iste
            ea exercitationem molestiae dolorum veritatis dolor fuga, quam culpa
            consectetur voluptatum! At consequatur voluptatibus repellendus ad
            deserunt beatae non dignissimos voluptatem veniam debitis? Officia,
            totam! Labore nisi exercitationem blanditiis reiciendis mollitia,
            rerum delectus quisquam recusandae, voluptas aliquam consequatur
            tempore vero alias illo ex corporis! Perspiciatis nesciunt omnis est
            ipsum! Quaerat voluptate dolores, nulla, quo quasi illum eum
            adipisci minus natus, repellendus quia. Cupiditate est beatae esse
            facilis sapiente hic illum quibusdam reiciendis voluptas. Fugit
            laudantium mollitia id veniam nisi ex dolores eveniet enim quos ad
            possimus, modi expedita voluptas hic dolorum minus repudiandae odio
            itaque aperiam harum? Voluptatibus sapiente ipsum at, repellat quia
            officia aut, praesentium ullam iure ipsa eligendi incidunt? Voluptas
            aut neque vitae eveniet nisi saepe, aliquam, praesentium consectetur
            consequuntur necessitatibus quia velit voluptate, sapiente molestiae
            atque modi illo blanditiis labore mollitia placeat. Harum nulla
            tempore, velit dignissimos at magni animi illum reiciendis, omnis
            suscipit eligendi laborum quas, tempora placeat consequuntur
            assumenda distinctio quam impedit sed iste adipisci ad deleniti
            quidem? Nostrum minus autem nemo natus eligendi consequuntur
            dolorum, voluptatem eum, sit enim placeat quia doloremque dolor
            possimus repellendus maiores ducimus facere magni! Ad recusandae
            temporibus modi soluta officia quis, ipsa libero quibusdam quisquam
            magnam assumenda similique expedita dolores quaerat totam
          </section>

          {/* Expense Breakdown Section */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-4">Expense Breakdown</div>
            <div className="rounded-xl bg-muted/50 p-4">Expense Trends</div>
          </section>

          {/* Investment Summary Section */}
          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-muted/50 p-4">Investment Summary</div>
            <div className="rounded-xl bg-muted/50 p-4">
              Portfolio Allocation
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              Performance Metrics
            </div>
          </section>

          {/* Goals Section */}
          <section className="rounded-xl bg-muted/50 p-4">Goals</section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
