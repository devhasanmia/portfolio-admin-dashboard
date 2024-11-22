import { useCreateSkillMutation } from "../../redux/services/skill/skillApi";
import PInput from "../../components/ui/PInput";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateSkills = () => {
  const [createSkill] = useCreateSkillMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const formattedData = {
        title: data.title,
        shortDescription: data.shortDescription,
        experienceMonths: Number(data.experienceMonths),
        experienceYears: Number(data.experienceYears),
      };
      const response = await createSkill(formattedData).unwrap();
      toast.success(response?.message);
      reset();
    } catch (error: any) {
      toast.error(error?.data?.errors[0]?.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Skill</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PInput
            label="Title"
            title="title"
            type="text"
            placeholder="Enter Skill Title"
            required={true}
            register={register("title", { required: "Title is required" })}
            error={errors.title?.message}
          />
          <PInput
            label="Short Description"
            title="shortDescription"
            type="text"
            placeholder="Enter a short description"
            required={true}
            register={register("shortDescription", {
              required: "Short Description is required",
            })}
            error={errors.shortDescription?.message}
          />
          <PInput
            label="Experience (Years)"
            title="experienceYears"
            type="number"
            placeholder="Years"
            required={true}
            register={register("experienceYears", {
              required: "Experience in years is required",
            })}
            error={errors.experienceYears?.message}
          />
          <PInput
            label="Experience (Months)"
            title="experienceMonths"
            type="number"
            placeholder="Months"
            required={true}
            register={register("experienceMonths", {
              required: "Experience in months is required",
            })}
            error={errors.experienceMonths?.message}
          />
        </div>
        <br />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSkills;
