"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

export function UpdateProfile() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name")).value;
        const image = (form.elements.namedItem("image")).value;

        try {
            await authClient.updateUser({
                name,
                image,
            });

            toast.success("Profile updated successfully ✅");

            window.location.reload();
        } catch (error) {
            toast.error("Update failed ❌");
            console.error(error);
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                <BiEdit /> Update Your Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
            
                                <form
                                    id="updateProfileForm"
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <TextField name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <TextField name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>
                                </form>
                            </Surface>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>

                            <Button type="submit" form="updateProfileForm" slot="close">
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}