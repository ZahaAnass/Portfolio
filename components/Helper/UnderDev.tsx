"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";

export default function DevStatusAlert() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(true);
    }, []);

    return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Hello Visitor!</DialogTitle>
            <DialogDescription>
                This portfolio is still under development. Thank you for your
                patience!
            </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <Button onClick={() => setIsOpen(false)}>Got it!</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    );
}
