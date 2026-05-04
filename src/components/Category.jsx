'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@heroui/react";

const Category = ({ categories }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category');

    const uniqueCategories = categories.filter(
        (cat, index, self) =>
            index === self.findIndex(c => c.category === cat.category)
    );

    const handleFilter = (category) => {
        if (category === activeCategory) {
            router.push('/all-books');
        } else {
            router.push(`/all-books?category=${category}`);
        }
    };

    return (
        <div className="mb-5 space-x-3">
            <Button
                size="sm"
                variant={!activeCategory ? "primary" : "outline"}
                onClick={() => router.push('/all-books')}
            >
                All
            </Button>
            {uniqueCategories.map(cat => (
                <Button
                    size="sm"
                    variant={activeCategory === cat.category ? "primary" : "outline"}
                    key={cat.id}
                    onClick={() => handleFilter(cat.category)}
                >
                    {cat.category}
                </Button>
            ))}
        </div>
    );
};

export default Category;