import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";

export async function TestimonialsSection() {
  const t = await getTranslations("testimonials");
  const testimonials = [
    {
      name: t("alexJohnson"),
      role: t("photographer"),
      content: t("alexJohnsonContent"),
      avatar: "AJ",
    },
    {
      name: t("mariaNguyen"),
      role: t("aiResearcher"),
      content: t("mariaNguyenContent"),
      avatar: "MN",
    },
    {
      name: t("chrisLee"),
      role: t("designer"),
      content: t("chrisLeeContent"),
      avatar: "CL",
    },
    // {
    //   name: t("sarahChen"),
    //   role: t("digitalArtist"),
    //   content: t("sarahChenContent"),
    //   avatar: "SC",
    // },
    // {
    //   name: t("michaelRodriguez"),
    //   role: t("travelBlogger"),
    //   content: t("michaelRodriguezContent"),
    //   avatar: "MR",
    // },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-400 mb-6">
              {t("sectionTitle")}
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("sectionDescription")}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary-200 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-primary-400">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-primary-300">
                        {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-400/80">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
